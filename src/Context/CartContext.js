import {createContext, useState} from "react";


export const CartContext = createContext({});


export const CartProvider = ({children})=>{

    const [carrito, setCarrito]=useState([]);
    

    const addItem = (item, quantity) => {

		const isItemInCart = carrito.some((producto) => producto.id === item.id);
		    if (item.stock >=0) {
                if (!isItemInCart) {
                    item.stock = item.stock-quantity;
                    const nuevoItem = { ...item, stock: item.stock, counter: quantity };
			        setCarrito([...carrito, nuevoItem]);
		        } else {
			        const foundedItem = carrito.find((product) => product.id === item.id);
			        foundedItem.counter = foundedItem.counter + quantity ;
                    foundedItem.stock = foundedItem.stock - quantity
                    setCarrito([...carrito]);
		    }
            };

	};




    
    const removeItem =(id)=>{
        setCarrito(carrito.filter(item=> item.id !== id))   
    }

    const clear =()=>{
        setCarrito ([])
    }

    const changeItemsInCart = (item, num) => {
			item.stock = item.stock + num;
		}


    return(
        <CartContext.Provider value={{carrito, addItem, removeItem, clear, changeItemsInCart}}>
            {children}
        </CartContext.Provider> 
    )
}


import {createContext, useState} from "react";

export const CartContext = createContext({});


export const CartProvider = ({children})=>{

    const [carrito, setCarrito]=useState([])

    const addItem = (item, quantity) => {
		
		const nuevoItem = { ...item, counter: quantity };
		
        const isItemInCart = carrito.some((product) => product.id === item.id);
		    if (!isItemInCart) {
			    setCarrito([...carrito, nuevoItem]);
		    } else {
			    const foundedItem = carrito.find((product) => product.id === item.id);
			    foundedItem.counter = foundedItem.counter + quantity;
		    }
		return;
	};

    const removeItem =(id)=>{
        setCarrito(carrito.filter(item=> item.id !== id))   
    }

    const clear =()=>{
        setCarrito ([])
    }

    
    return(
        <CartContext.Provider value={{carrito, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider> 
    )
}



/*    const removerProducto = (producto) =>{

    }*/
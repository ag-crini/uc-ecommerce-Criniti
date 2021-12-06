import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


export const Cart =()=> {
  
  const {carrito, clear}=useContext(CartContext)
  const {removeItem }= useContext(CartContext);
    console.log(carrito)

  const precioFinal = carrito.reduce((precioAcum, item) => precioAcum + (item.counter * item.price),0);

  return(
    <div className="Cart">
      {carrito.length ? 
        (
        carrito.map (item => 
          <div key={item.id}>
            
            <CartItem
            id={item.id}
            pictureUrl={item.pictureUrl}
            title={item.title}
            counter={item.counter}
            price={item.price}
            />

            <button className="botonRemove" onClick={()=>removeItem(item.id)}>Remover item</button>
          </div>
          )
        ): 
        <div>
          <p> No hay ningun producto en tu carrito de compras!</p>
        </div>
      }

      {
      carrito.length ? 
        (
				<div>
          <button className="botonRemove" onClick={() => clear()}>Remover todos los items</button>
          <br/>
          <Link to='/checkout'>
            <button className="botonConfirm">Confirmar compra!</button>
          </Link>
			  </div>
        ) 
        : 
				<Link to='/'>
					<button className="botonCart">Buscá uno antes que sea tarde!</button>
				</Link>
      }
      {
      precioFinal !== 0 && 
        <div>
          <p>
            Total a pagar: ${precioFinal}
          </p>
        </div>
      }
    </div>
  )
}

export default Cart;  


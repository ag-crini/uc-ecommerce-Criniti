import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


export const Cart = () =>{
  
  const {carrito, removeItem, clear }= useContext(CartContext)
  
  return(
    <div className="Cart">
      {carrito.length ? (
        carrito.map (producto => 
          <div key={producto.id}>
            <CartItem 
              key={producto.id}
              title={producto.title}
              price={producto.price} 
              stock={producto.stock} 
              pictureUrl={producto.pictureUrl} /> 
            <button onClick={()=>removeItem(producto.id)}>Remover item</button>
          </div>  
        )): 
        <div>
          <p> No hay ningun producto!</p>
          <Link to={`/`}>
            <button>Anda a buscar uno antes que sea tarde!</button>
          </Link>
        </div>}
          
      {carrito.length ? (
				<button onClick={() => clear()}>Remover todos los productos</button>
			  ) : 
				<Link to='/'>
					<button>Volver al menú</button>
				</Link>
      }

    </div>
  )
}

export default Cart; 


//const cart = useContext (CartContext);
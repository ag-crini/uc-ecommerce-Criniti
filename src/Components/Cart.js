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
      {carrito.length ? (
        carrito.map (item => 
          <div key={item.id}>
            
            <CartItem
            id={item.id}
            pictureUrl={item.pictureUrl}
            title={item.title}
            counter={item.counter}
            price={item.price}
                                    
            /> 
            <button onClick={()=>removeItem(item.id)}>Remover item</button>

          </div>  
        )): 
        <div>
          <p> No hay ningun producto!</p>
          <Link to={`/`}>
            <button>Anda a buscar uno antes que sea tarde!</button>
          </Link>
        </div>}
          
      {carrito.length ? (
				<div>
          <button onClick={() => clear()}>Remover todos los productos</button>
          <Link to='/checkout'>
            <button>Termine mi compra</button>
          </Link>
			  </div>
        ) : 
				<Link to='/'>
					<button>Volver al menú</button>
				</Link>
      }

      <div>

      {precioFinal !== 0 && 
      ( <p>
          Total a pagar: ${precioFinal}
        </p>
      )
      }
      </div>

      </div>


  )
}

export default Cart;  


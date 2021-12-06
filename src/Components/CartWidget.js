import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

export const CartWidget =()=> {

  const {carrito}=useContext(CartContext)

  const cantidadItems = carrito.reduce((total, item) => total + item.counter, 0);
  
  return (
    <div>
      <Link to='/cart'>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" className="svg-inline--fa fa-cart-shopping carritoIcono" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg>
      </Link>
        {cantidadItems !== 0 && 
          <p className="cantidadCarrito">{cantidadItems}</p>
        }
    </div>
  )
}

export default CartWidget;

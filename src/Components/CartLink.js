import './Cart.css';
import { Link } from 'react-router-dom';

export const CartLink = () =>{
  

  return(
    <div className="CartLink">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-check" className="svg-inline--fa fa-square-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM339.8 211.8l-128 128C206.3 345.3 199.2 348 192 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L192 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C350.7 183.1 350.7 200.9 339.8 211.8z"></path></svg>
      <Link to={`/cart`}>
        <button>Ir a mi carrito</button>
      </Link>
    </div>
  )
}

export default CartLink; 
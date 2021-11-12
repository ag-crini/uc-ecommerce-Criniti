//import { useContext } from 'react';
//import { CartContext } from '../Context/CartContext';
//import './CartItem.css';


export const CartItem = (id,title,price,stock,pictureUrl) =>{
  
  
  return(
    <div className="CartItem" key={id} >
      <h1>{title}</h1>
      <p>Precio:${price} - Stock:{stock} un.</p>
      
      <div>
        <img src={pictureUrl} className="ImgItem" alt="foto-producto"/>  
      </div>

    </div>    
  )

}

export default CartItem; 


//const cart = useContext (CartContext);
//  const { carrito }= useContext(CartContext)
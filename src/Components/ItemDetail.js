import './ItemDetail.css';
import ItemCount from './ItemCount';
import CartLink from './CartLink';
import { useState } from 'react';
//import { CartContext } from '../Context/CartContext';

export default function ItemDetail ({id,title,price,stock,medidas,pictureUrl}){

  
  const [cantidad , setCantidad] = useState (null);
  const [mostrarCount, setMostrarCount] = useState (true);


  const agregarACarrito =(cantidad)=>{
    setCantidad (cantidad)
    setMostrarCount(false)
 }

  const onRemonta =()=>{
    setMostrarCount (true)
  }

  return (
    <div > 
      <div className="ItemDetail" key={id}>
          <div className="ItemDetailDescription">
            <h1>{title}</h1>
            <p> Precio:{price} - Stock:{stock} </p>
            <h2> Medidas </h2>
            <p>{medidas}</p>
            
            { mostrarCount? <ItemCount stock={stock} initial={1} onAdd={agregarACarrito} /> : 
            
            <div>
              <p> Agregaste {cantidad} unidades a tu carrito! </p>
              <button onClick={onRemonta}> Quiero sumar más de este producto!</button>
              <CartLink/>
            </div>
            }            
          </div>
          <img src={pictureUrl} alt="img-producto"/>
        </div>
    </div>
  )
};

//const {carrito, setCarrito, addItem}=useContext(CartContext);


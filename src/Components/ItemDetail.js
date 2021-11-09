import './ItemDetail.css';
import ItemCount from './ItemCount';
import CartLink from './CartLink';
import { useState } from 'react';

export default function ItemDetail ({id,title,price,stock,medidas,pictureUrl}){


  const [flag,setFlag]=useState (true);
  const [flag2,setFlag2]=useState (false);

  const onAdd =(cantidad)=>{
    console.log (cantidad)
    setFlag(false)
    setFlag2(true)
 }

  const onRemonta =()=>{
    setFlag (true)
    setFlag2(false)
  }

  return (
    <div > 
      <div className="ItemDetail" key={id}>
          <div className="ItemDetailDescription">
            <h1>{title}</h1>
            <p> Precio:{price} - Stock:{stock} </p>
            <h2> Medidas </h2>
            <p>{medidas}</p>
            {flag && <ItemCount stock={stock} initial={1} onAdd={onAdd} /> } 
            {!flag && <button onClick={onRemonta}> Quiero sumar más de este producto!</button>}
            {flag2 && <CartLink/>}
            
          </div>
          <img src={pictureUrl} alt="img-producto"/>
        </div>
    </div>
  )
};

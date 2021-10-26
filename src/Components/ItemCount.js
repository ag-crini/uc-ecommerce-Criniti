import './ItemCount.css';
import { useState } from 'react';
import barra from '../img/barra.jpg'

const ItemCount = ({initial, stock})=>{

  const [count, setCount] = useState (initial)

  const onAdd =()=>{
    if (count <stock){
      setCount (count+1)}
  };
  const onDecrease =()=>{
    if (count>initial){
      setCount (count-1)}
  };

   return(
    <div className="Contador">
        <img src={barra} className="imgContador" alt="foto-barra"/>
        <div>      
          <button onClick={onAdd}>+</button>
          <p>{count}</p>
          <button onClick={onDecrease}>-</button>
        </div>
        <button> Agregar al carrito de compra! </button>
    </div>
  )
}

export default ItemCount;




 
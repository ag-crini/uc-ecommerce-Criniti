import './ItemCount.css';
import { useState } from 'react';
//import barra from '../img/barra.jpg'

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
        <div>
          <button onClick={onDecrease}>-</button>
          <p>{count}</p>
          <button onClick={onAdd}>+</button>
        </div>
    </div>
  )
}

export default ItemCount;




 
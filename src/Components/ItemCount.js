import './ItemCount.css';
import { useEffect, useState } from 'react';
import barra from './img/barra.jpg'

const ItemCount = ({initial, stock})=>{

  const [count, setCount] = useState (parseInt(initial))

  const onAdd =()=>{
    setCount (count+parseInt(1))
  }
  const onDecrease =()=>{
    setCount (count-parseInt(1))
  }

  useEffect(()=>{
    if (count> stock) {
      setCount (count-parseInt(1))
    } else if (count <=0){
      setCount(count+parseInt(1))
    }
  },[count,stock])

  return(
    <div className="Contador">
        <img src={barra} className="imgContador" alt="foto-barra"/>
        <div>      
          <button onClick={onAdd}>+</button>
          <p>{count}</p>
          <button onClick={onDecrease}>-</button>
        </div>
    </div>
  )
}

export default ItemCount;




 
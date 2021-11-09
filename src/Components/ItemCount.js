import './ItemCount.css';
import { useState } from 'react';


const ItemCount = (props)=>{

  const [count, setCount] = useState (props.initial)

  const onIncrease =()=>{
    if (count <props.stock){
      setCount (count+1)}
  };
  const onDecrease =()=>{
    if (count>props.initial){
      setCount (count-1)}
  };


  

  return(
    <div className="Contador">
        <div>
          <button onClick={onDecrease}>-</button>
          <p>{count}</p>
          <button onClick={onIncrease}>+</button>
        </div>

        <div>
              <button onClick={()=>props.onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;




 
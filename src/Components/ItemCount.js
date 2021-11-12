import './ItemCount.css';
import { useState } from 'react';
//import { CartContext } from '../Context/CartContext';


const ItemCount = ({stock, initial, onAdd})=>{

  const [count, setCount] = useState (initial)
  

  const onIncrease =()=>{
    if (count < stock){
      setCount (count+1)}
  };
  const onDecrease =()=>{
    if (count> initial){
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
              <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;

//const {addItem}=useContext(CartContext)

//import { useContext, useState } from 'react';
 
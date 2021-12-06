import './ItemCount.css';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';



const ItemCount = ({item, initial, mostrarBotonCarrito=true, onAdd})=>{

  const [count, setCount] = useState (initial)
  const {addItem} = useContext(CartContext)
  
  const onIncrease =()=>{
    if (mostrarBotonCarrito) {
      if (count < item.stock){
        setCount (count+1);
    	}else{
        console.log('No hay stock')
      }
    }else {
        console.log('mostrarBotonCarrito = False');
        if (item.stock > 0) {
          setCount(count + 1);
        } else {
          console.log('NO MORE STOCK!!!');
        }
      }
  };

  const onDecrease =()=>{
    if (count > 0 ){
      setCount(count - 1)
    }
  }

  const handleClick = () => {
    onAdd(count);
    addItem (item,count)
  };
    
  return(
    <div className="contador">
        <div className="divContador">
          <button className="botonCompraMas" onClick={onDecrease}>-</button>
          <p>{count}</p>
          <button className="botonCompraMenos" onClick={onIncrease}>+</button>
        </div>
        <br/>
        <div>
          <button className="botonCompra" onClick={handleClick}> Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;

import './ItemCount.css';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';



const ItemCount = ({item, initial, mostrarBotonCarrito=true, onAdd=null})=>{

  const [count, setCount] = useState (initial)
  const {addItem} = useContext(CartContext)
  
  const onIncrease =()=>{
    if (mostrarBotonCarrito) {
      if (count < item.stock){
        setCount (count+1);
        console.log('stock', item.stock)
        console.log('counter', count)
        console.log('id',item.id)
    	}else{
        console.log('No hay stock')
      }
    }else {
        console.log('mostrarBotonCarrito = False');
        if (item.stock > 0) {
          console.log('stock', item.stock);
          console.log('counter', count);
          console.log('id',item.id);
          setCount(count + 1);
        } else {
          console.log('NO MORE STOCK!!!');
        }
      }
  };

  const onDecrease =()=>{
    if (count > 0 ){
      console.log('stock', item.stock)
      console.log('counter', count)
      setCount(count - 1)
    }
  }


    const handleClick = () => {
		  onAdd(count);
      addItem (item,count)
    };
    
  return(
    <div className="Contador">
        <div>
          <button onClick={onDecrease}>-</button>
          <p>{count}</p>
          <button onClick={onIncrease}>+</button>
        </div>

          <div>
            <button onClick={handleClick}> Agregar al carrito</button>
          </div>
    </div>
  )
}

export default ItemCount;

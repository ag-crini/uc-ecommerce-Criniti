import './ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';



export default function ItemDetail ({item}){

const {addItem}=useContext(CartContext)

const [mostrarCount, setMostrarCount]=useState(true)


const onAddHandle = (counter) => {
  addItem(item, counter)
  setMostrarCount (false)
};


  return (
      <div > 
      <div className="ItemDetail" key={item.id}>
          <div>
            <h1>{item.title}</h1>
            <p> Precio:{item.price} - Stock:{item.stock} </p>
            <h2> Medidas </h2>
            <p>{item.medida}</p>
          
          
            {item.stock > 0 ? 
        (
          mostrarCount ? 
          (
            <div>
              <ItemCount initial={1} onAdd={onAddHandle} item={item}/>
            </div>
          )
          :          
          (
            <div>
              <Link to='/cart'>
                <button >
                  Ir a mi carrito!
                </button>
              </Link>

              <Link to='/'>
                <button>
                  Continuar comprando!
                </button>
              </Link>
            </div>
          )
        )
        :
        (
          <div>
            <h1>No hay más stock!</h1>
            <Link to='/'>
              <button>Continuar comprando!</button>
            </Link>
          </div>
        )
      }
                   
          </div>
          <img src={item.pictureUrl} alt="img-producto"/>
        
      </div>
    </div>


    )} 

  
  
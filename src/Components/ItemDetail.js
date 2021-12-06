import './ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function ItemDetail ({item}){


  const [mostrarCount, setMostrarCount]=useState(true)

  const onAddHandle = () => {
    setMostrarCount (false)
  };

  return (
    <div > 
      <div className="ItemDetail" key={item.id}>
        <div className="ItemDetailDescription">
          <h1>{item.title}</h1>
          <p> Precio:{item.price} - Stock:{item.stock} </p>
          
          <h3> Descripción </h3>
          <p>{item.medida}</p>
          <br/>
        
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
                  <button className="botonCompra" >
                    Ir a mi carrito!
                  </button>
                </Link>
                <Link to='/'>
                  <button className="botonCompra">
                    Comprar más!
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
  )
} 

  
  
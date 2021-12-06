import './Item.css';
import { Link } from 'react-router-dom';



export const Item = ({id,title,price,stock,pictureUrl}) =>{
  
  return(
    <div className="Items" key={id} >
        <h1>{title}</h1>
        <p>Precio:${price}</p> 
        <p>Stock:{stock} un.</p>
        <Link 
          key={id} to={`/item/${id}`}><button className="botonItem">Ver este producto</button>
        </Link>
        <img src={pictureUrl} className="ImgItem" alt="foto-producto"/>  
    </div>
  )
}

export default Item; 
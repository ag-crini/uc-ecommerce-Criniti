import './Item.css';
//import { Link } from 'react-router-dom';


export const Item = ({id,title,price,stock,pictureUrl}) =>{
    
  return(
    <div className="Items" key={id} >
        <h1>{title}</h1>
        <p>Precio:${price} - Stock:{stock} un.</p>
        <button>Ver detalle del producto</button>
        <img src={pictureUrl} className="ImgItem" alt="foto-producto"/>  
    </div>
  )
}

export default Item; 
import './Item.css';


export const Item = ({id,title,price,stock,pictureUrl}) =>{
    
  return(
    <div className="Items" key={id} >
        <h1>{title}</h1>
        <p>Precio:${price} - Stock:{stock} un.</p>
        <button>Ver detalle del producto</button>
        <br/>
        <img src={pictureUrl} className="ImgItem" alt="foto-producto"/>  
    </div>
  )
}

export default Item;




 
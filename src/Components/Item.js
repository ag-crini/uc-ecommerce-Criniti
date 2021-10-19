import './Item.css';


export const Item = ({title,price,stock}) =>{
  
  return(
    <div className="Items">
        <h1>{title}</h1>
        <p>Precio:${price} - Stock:{stock} un.</p>
        
    </div>
  )
}

export default Item;




 
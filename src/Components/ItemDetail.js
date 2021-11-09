import './ItemDetail.css';
import ItemCount from './ItemCount';
import CartLink from './CartLink';

export default function ItemDetail ({id,title,price,stock,medidas,pictureUrl}){


 const onAdd =(cantidad)=>{
   console.log (cantidad)
 }

  return (
    <div > 
      <div className="ItemDetail" key={id}>
          <div className="ItemDetailDescription">
            <h1>{title}</h1>
            <p> Precio:{price} - Stock:{stock} </p>
            <h2> Medidas </h2>
            <p>{medidas}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            
            <CartLink/>

          </div>
          <img src={pictureUrl} alt="img-producto"/>
        </div>
    </div>
  )
};

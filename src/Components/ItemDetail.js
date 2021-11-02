import './ItemDetail.css';
import ItemCount from './ItemCount';


export default function ItemDetail ({id,title,price,stock,medidas,pictureUrl}){

  return (
    <div > 
      <div className="ItemDetail" key={id}>
          <div className="ItemDetailDescription">
            <h1>{title}</h1>
            <p> Precio:{price} - Stock:{stock} </p>
            <h2> Medidas </h2>
            <p>{medidas}</p>
            <ItemCount stock={stock} initial={1}/>
            <button>Comprar!</button>
          </div>
          <img src={pictureUrl} alt="img-producto"/>
        </div>
    </div>
  )
};

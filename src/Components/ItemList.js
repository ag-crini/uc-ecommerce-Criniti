import './ItemList.css';
import Item from './Item';


export default function ItemList ({elementos}){

  
  return (
    <div className="ItemList"> 
      {elementos.map( elemento => 
        <Item 
          key={elemento.title}
          id={elemento.id}  
          title={elemento.title} 
          price={elemento.price} 
          stock={elemento.stock} 
          pictureUrl={elemento.pictureUrl}/> 
      )}
    </div>
  )
};



import './ItemList.css';
import Item from './Item';




/*const data = [
  {id:"1", title:"Mesa Cuyo S", price:"19000", pictureUrl:"img/mesa-xs.jpg", stock:"18"},
  {id:"2", title:"Mesa Cuyo M", price:"23000", pictureUrl:"img/mesa-m.jpg", stock:"9"},
  {id:"3", title:"Mesa Cuyo L", price:"25000", pictureUrl:"img/mesa-l.jpg", stock:"7"},
  {id:"4", title:"Estantería Norteña", price:"35000", pictureUrl:"img/estanteria.jpg", stock:"9"},
  {id:"5", title:"Barra Patagónica", price:"29000", pictureUrl:"img/barra.jpg", stock:"5"},
  {id:"6", title:"Rack Pampeano", price:"24000", pictureUrl:"img/rack.jpg", stock:"12"},
  {id:"7", title:"Estantes Litoral", price:"16500", pictureUrl:"img/estante-cocina.jpg", stock:"14"},
  {id:"8", title:"Banqueta Rosario", price:"22000", pictureUrl:"img/banqueta.jpg", stock:"11"},
]*/

const data =[];


export default function ItemList(){
  return (
    <div className="ItemList">
      {data &&
      data.map(producto => (
      <Item key={producto.id} title={producto.title} price={producto.price} stock={producto.stock}/>
      ))}

    </div>
  )
};



 
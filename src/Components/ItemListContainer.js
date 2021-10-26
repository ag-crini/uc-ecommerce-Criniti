import './ItemListContainer.css';
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import {useState,useEffect } from 'react';

const data = [
  {id:'1', title:'Mesa Cuyo S', price:'19000', stock:'18', pictureUrl:'/img/mesa-xs.jpg'},
  {id:"2", title:"Mesa Cuyo M", price:"23000", stock:"9", pictureUrl:'/img/mesa-m.jpg'},
  {id:"3", title:"Mesa Cuyo L", price:"25000", stock:"7", pictureUrl:'/img/mesa-l.jpg'},
  {id:"4", title:"Estantería Norteña", price:"35000", stock:"9", pictureUrl:"/img/estanteria.jpg"},
  {id:"5", title:"Barra Patagónica", price:"29000", stock:"5", pictureUrl:"/img/barra.jpg"},
  {id:"6", title:"Rack Pampeano", price:"24000", stock:"12", pictureUrl:"/img/rack.jpg"},
  {id:"7", title:"Estantes Litoral", price:"16500", stock:"14", pictureUrl:"/img/estante-cocina.jpg"},
  {id:"8", title:"Banqueta Rosario", price:"22000", stock:"11", pictureUrl:"/img/banqueta.jpg"},
]

export default function ItemListContainer(){

  const [elementos, setElementos] =useState ([]);

  const getData = (datos) => new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if (data){resolve (datos)
      } else{ reject ("No hay datos de productos.")
      }  
    },2000)
  })

  useEffect(()=>{
    getData(data)
    .then(res=> setElementos(res))
    .catch(err=> console.log("error al cargar"))
  },[]);

return (
  <div className="itemContainer">
    <ItemCount stock={5} initial={1}/>
    <ItemList elementos={elementos}/>
  </div>
)
}
 
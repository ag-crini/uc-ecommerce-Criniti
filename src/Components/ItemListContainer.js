import './ItemListContainer.css';
import ItemList from './ItemList';
import {useState,useEffect } from 'react';

const data = [
  {id:'1', title:'Mesa Cuyo S', price:'19000', stock:'18', pictureUrl:'/img/mesa-xs.jpg', medidas:'Al: 0,85 mts., An: 1 mt., La: 1,2 mts'},
  {id:"2", title:"Mesa Cuyo M", price:"23000", stock:"9", pictureUrl:'/img/mesa-m.jpg', medidas:'Al: 0,85 mts., An: 1.2 mts., La: 1,8 mts'},
  {id:"3", title:"Mesa Cuyo L", price:"25000", stock:"7", pictureUrl:'/img/mesa-l.jpg', medidas:'Al: 0,85 mts., An: 1.2 mt., La: 2.4 mts'},
  {id:"4", title:"Estantería Norteña", price:"35000", stock:"9", pictureUrl:"/img/estanteria.jpg", medidas:'Al: 1,9 mts., An: 0.45 mts., La: 2.1 mts'},
  {id:"5", title:"Barra Patagónica", price:"29000", stock:"5", pictureUrl:"/img/barra.jpg", medidas:'Al: 1,35 mts., An: 0.8 mts., La: 1.7 mts'},
  {id:"6", title:"Rack Pampeano", price:"24000", stock:"12", pictureUrl:"/img/rack.jpg", medidas:'Al: 0,45 mt., An: 0.45 mts., La: 2 mts'},
  {id:"7", title:"Estantes Litoral", price:"16500", stock:"14", pictureUrl:"/img/estante-cocina.jpg", medidas:'Al: 0,3 mts., An: 0.4 mts., La: 0.8 mts'},
  {id:"8", title:"Banqueta Rosario", price:"22000", stock:"11", pictureUrl:"/img/banqueta.jpg", medidas:'Al: 0,65 mt., An: 0.35 mt., La: 0.35 mts'},
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
    <ItemList elementos={elementos}/>
  </div>
)
}
 
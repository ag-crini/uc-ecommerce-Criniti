import './ItemList.css';
import Item from './Item';
import { useState,useEffect } from 'react';
//import {data} from './Data.json'



const data = [
  {id:'1', title:'Mesa Cuyo S', price:'19000', stock:'18', pictureUrl:'/img/mesa-xs.jpg'},
  {id:"2", title:"Mesa Cuyo M", price:"23000", stock:"9", pictureUrl:'/img/mesa-m.jpg'},
  {id:"3", title:"Mesa Cuyo L", price:"25000", stock:"7", pictureUrl:'/img/mesa-l.jpg'},
  {id:"4", title:"Estantería Norteña", price:"35000", stock:"9", pictureUrl:"/img/estanteria.jpg"},
  {id:"5", title:"Barra Patagónica", price:"29000", pictureUrl:"/img/barra.jpg", stock:"5"},
  {id:"6", title:"Rack Pampeano", price:"24000", pictureUrl:"/img/rack.jpg", stock:"12"},
  {id:"7", title:"Estantes Litoral", price:"16500", pictureUrl:"/img/estante-cocina.jpg", stock:"14"},
  {id:"8", title:"Banqueta Rosario", price:"22000", pictureUrl:"/img/banqueta.jpg", stock:"11"},
]


export default function ItemList(){

  const [elementos, setElementos] =useState ([]);

  const getData = (datos) => new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if (data){
        resolve (datos)
      } else{
        reject ("no hay data")
      }  
    },2000)

  })

  useEffect(()=>{
    getData(data)
    .then(res=> setElementos(res))

    .catch(err=> console.log("error al cargar"))
  },[]);



  return (
    <div className="ItemList">

        {elementos && elementos.map(elemento => (
          <Item 
            key={elemento.id} 
            title={elemento.title} 
            price={elemento.price} 
            stock={elemento.stock}
            pictureUrl={elemento.pictureUrl}/>
        ))}
    </div>
  )
};



 
import './ItemListContainer.css';
import ItemList from './ItemList';
import {useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { getFirestore, query } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';


export default function ItemListContainer(){

  const [elementos, setElementos] =useState ([]);
  const {categoryId} = useParams ();
  


  //------------ xa traer toda una coleccion ------------//

  useEffect(()=>{
    const db = getFirestore();

    getDocs (collection(db,"Productos").then ((snapshot)=>{
      if (snapshot.exist()){
        setElementos(snapshot.docs.map((doc)=>doc.data()))
      }
    }))
  },[categoryId])



return (
  <div className="itemContainer">
    <ItemList elementos={elementos}/>
  </div>
)}
 


/*const data = [
  {id:"1", categoria:"mesa", title:'Mesa Cuyo S', price:'19000', stock:'18', pictureUrl:'/img/mesa-xs.jpg', medida:'Al: 0,45 mts., An: 1 mt., La: 1,2 mts'},
  {id:"2", categoria:"mesa", title:"Mesa Cuyo M", price:"23000", stock:"9", pictureUrl:'/img/mesa-m.jpg', medida:'Al: 0,85 mts., An: 1.2 mts., La: 1,8 mts'},
  {id:"3", categoria:"mesa", title:"Mesa Cuyo L", price:"25000", stock:"7", pictureUrl:'/img/mesa-l.jpg', medida:'Al: 0,85 mts., An: 1.2 mt., La: 2.4 mts'},
  {id:"4", categoria:"living", title:"Estantería Norteña", price:"35000", stock:"9", pictureUrl:"/img/estanteria.jpg", medida:'Al: 1,9 mts., An: 0.45 mts., La: 2.1 mts'},
  {id:"5", categoria:"living", title:"Barra Patagónica", price:"29000", stock:"5", pictureUrl:"/img/barra.jpg", medida:'Al: 1,35 mts., An: 0.8 mts., La: 1.7 mts'},
  {id:"6", categoria:"living", title:"Rack Pampeano", price:"24000", stock:"12", pictureUrl:"/img/rack.jpg", medida:'Al: 0,45 mt., An: 0.45 mts., La: 2 mts'},
  {id:"7", categoria:"otro", title:"Estantes Litoral", price:"16500", stock:"14", pictureUrl:"/img/estante-cocina.jpg", medida:'Al: 0,3 mts., An: 0.4 mts., La: 0.8 mts'},
  {id:"8", categoria:"otro", title:"Banqueta Rosario", price:"22000", stock:"11", pictureUrl:"/img/banqueta.jpg", medida:'Al: 0,65 mt., An: 0.35 mt., La: 0.35 mts'},
]

  const getData = (datos) => new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if (data){resolve (datos)
      } else{ reject ("No hay datos de productos.")
      }  
    },1000)
  })



  useEffect(()=>{
    getData(data)
    .then(data => {if (categoryId){setElementos(data.filter(filtro => filtro.categoria === categoryId))} 
    else{ 
      setElementos(data)}
      })
    .catch(err=> console.log("error al cargar"))
  },[categoryId]);
*/

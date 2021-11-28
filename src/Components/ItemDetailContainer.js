import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import {useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../firebase';
import { doc, getDoc} from '@firebase/firestore';


export default function ItemDetailContainer(){

  const [elemento, setElemento] =useState ([]);
  const {itemId} = useParams ();

//--------- xa un solo elemento de la colecc----------//

useEffect(()=>{  
  const db = getFirestore();
  
  const itemRef = doc(db,"Productos",itemId);
  getDoc(itemRef).then((snapshot)=>{
    
    if (snapshot.exists()) {
      setElemento({...snapshot.data(), id : itemId});
  }   
    
  })
},[itemId])


return (
  <div className="itemDetailContainer">
    { elemento? <ItemDetail item= {elemento} key={elemento.id}/>: <p>Cargando...</p>}
  </div>
)}


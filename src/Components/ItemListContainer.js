import './ItemListContainer.css';
import ItemList from './ItemList';
import {useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs,where, query } from '@firebase/firestore';


export default function ItemListContainer(){

  const [elementos, setElementos] =useState ([]);
  const {categoryId} = useParams ();
  

  //------------ xa traer toda una coleccion ------------//

  useEffect(() => {

    const db = getFirestore();
    
    if (categoryId !== undefined){ 
      getDocs(query(collection(db, "Productos"), where("categoria", "==", categoryId)))
      .then((snapshot) => {
        setElementos(snapshot.docs.map((doc) =>{
            return {...doc.data(), id : doc.id}
        }));
    })}
    else{
      getDocs(collection(db, 'Productos'))
      .then((snapshot) => {
        setElementos(snapshot.docs.map((doc) => {
            const sinCategoria = {...doc.data(), id : doc.id};
            return sinCategoria;
        }))
    })}
}, [categoryId]);




return (
  <div className="itemContainer">
    <ItemList elementos={elementos}/>
  </div>
)}
 

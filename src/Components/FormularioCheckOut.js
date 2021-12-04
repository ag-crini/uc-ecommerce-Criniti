import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { addDoc, collection, doc, updateDoc} from "@firebase/firestore";
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom';


const FormularioCheckOut = ()=>{

  const {carrito, clear, removeItem}=useContext(CartContext)
  const [nuevaOrden, setNuevaOrden] = useState(null)
    const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telef: ""
  });
  
  const fecha = new Date ();
  const fechaOrden = fecha.toLocaleDateString();
  const precioFinal = carrito.reduce((precioAcum, item) => precioAcum + (item.counter * item.price),0);
  
  const db= getFirestore();
  const ordenes = collection(db, "Ordenes");
  
  function onChange(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  const enviarOrden= async(e)=> {
    try{
      e.preventDefault();
      const ordenNueva={
        formulario,
        carrito,
        precioFinal,
        date:fechaOrden
      }

      addDoc(ordenes,ordenNueva).then(({id})=> setNuevaOrden(id))
      


      carrito.forEach((item) => {
				const itemRef = doc(db,"Productos",item.id);
				updateDoc(itemRef, { stock: item.stock});
			});
			removeItem();
 
    } catch (err){
      console.log("error")
    }
  }


  
  return(
    <div>
      { nuevaOrden ?
        <div>
          <h3>Gracias por tu compra!!</h3>
          <div>
              <p>Tu n° de pedido es {nuevaOrden}. Te enviaremos por mail más indicaciones!</p>
          </div>
          <Link to='/'>
            <button onClick={() => clear()}>
              Volver al menu principal
            </button>
              
          </Link>
        </div>
        :
        <div>
          <form onSubmit={enviarOrden}>
              <div>
                  <label>Nombre: </label>
                  <br/>
                  <input value={formulario.nombre} type="text" name="nombre" onChange={onChange}/>
                  <br/>
                  <label>E-mail: </label>
                  <br/>
                  <input value={formulario.email} type="email" name="email" onChange={onChange}/>
                  <br/>
                  <label>N° de contacto: </label>
                  <br/>
                  <input value={formulario.telef} type="text" name="telef" onChange={onChange}/>
              </div>
              <br/>
              <button type="submit" disabled={!(formulario.nombre &&formulario.email &&formulario.telef)}>
                  Finalizar Compra
              </button>
          </form>
          <div>
            <h3>Tu pedido:</h3>
            <div>
              {
                carrito.map((item) => (
                    <div key={item.itemId}>
                      <img src={item.pictureUrl} alt={item.title} width="20" height="20"/>
                      <p>{item.title}</p>
                      <p>{item.counter} un.</p>
                      <p>${item.counter * item.price}</p>
                    </div>
                ))
              }
            </div>
            <h3>Total: ${precioFinal}</h3>
          </div>
        </div>
      }
    </div>
  )
}

export default FormularioCheckOut;


import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { addDoc, collection, Timestamp} from "firebase/firestore";
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom';



const FormularioCheckOut = ()=>{

  const {carrito}=useContext(CartContext)
  const [nuevaOrden, setNuevaOrden] = useState(null)

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telef: ""
  });
  
  function onChange(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  const enviarOrden=()=> {

    const itemsOrden = carrito.map( item => {
      return {
          id: item.id,
          price: item.price,
          title: item.title,
          count: item.count
      }
    })
        
    const orden ={
      buyer: {
        nombre:formulario.nombre,
        email:formulario.email,
        telef:formulario.telef
      },
      items: itemsOrden,
      total: precioFinal,
      fecha: Timestamp.fromDate(new Date())
    }

    const db= getFirestore();
    const orderCollection = collection(db, "Ordenes");

    addDoc(orderCollection,orden).then(({id})=> setNuevaOrden(id)).catch(console.log("no se pudo!"));
  }

  const precioFinal = carrito.reduce((precioAcum, item) => precioAcum + (item.counter * item.price),0);

  return(
    <div>
      { nuevaOrden ?
        <div>
          <h3>Gracias por tu compra!!</h3>
          <div>
              <p>Tu n° de pedido es {nuevaOrden}. Te enviaremos por mail más indicaciones!</p>
          </div>
          <Link to='/'>
            <button>
              Volver al menu principal
            </button>
              
          </Link>
        </div>
        :
        <div>
          <form>
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
              <button type="submit" onSubmit={enviarOrden} disabled={!(formulario.nombre &&formulario.email &&formulario.telef)}>
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




  
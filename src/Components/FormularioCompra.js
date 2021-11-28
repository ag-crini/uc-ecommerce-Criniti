import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const FormularioCheckOut = (createOrder) => {

  const {carrito}=useContext(CartContext)

  const [formFields, setFormFields] = useState({
      name: "",
      email: "",
      phone: ""
  });
  
  function handleChange(evt) {
      setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
  }

  function onSubmit(event) {
      createOrder(formFields);
      setFormFields({
          name : "",
          email : "",
          phone : ""
      });
  }

  const precioFinal = carrito.reduce((precioAcum, item) => precioAcum + (item.counter * item.price),0);

  return(
      <div>
          <div>
              <div>
                  <form>
                      <div className="input">
                          <label htmlFor="">Nombre: </label><br />
                          <input value={formFields.name} type="text" name="name" onChange={handleChange} autoComplete="off"/>
                      </div>
                      <div className="input">
                          <label htmlFor="">Email: </label><br />
                          <input value={formFields.email} type="email" name="email" onChange={handleChange} autoComplete="off"/>
                      </div>
                      <div className="input">
                          <label htmlFor="">Telefono: </label><br />
                          <input value={formFields.phone} type="text" name="phone" onChange={handleChange} autoComplete="off"/>
                      </div>
                      <button 
                          type="button" 
                          onClick={onSubmit}
                          disabled={!(formFields.name && formFields.email && formFields.phone)}
                      >
                          Finalizar Compra
                      </button>
                  </form>
              </div>
          </div>
          <div>
              <div>
                  <h3>Resumen de compra</h3>
                  <table>
                      <thead>
                          <tr className="thead">
                              <th>Producto</th>
                              <th>Cantidad</th>
                              <th>Sub-total</th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                          carrito.map((item) => (
                              <tr key={item.itemId}>
                                  <td>
                                      <img src={item.pictureUrl} alt={item.title} width="20" height="20"/>
                                      <p>{item.title}</p>
                                  </td>
                                  <td>
                                      {item.counter}
                                  </td>
                                  <td>
                                      {item.counter * item.price}
                                  </td>
                              </tr>
                          ))
                      }
                      </tbody>
                  </table>
                  <h3>Total: ${precioFinal}</h3>
              </div>
          </div>
      </div>
  )
}

export default FormularioCheckOut;


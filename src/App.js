import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer'; 
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import FormularioCheckOut from './Components/FormularioCheckOut'
import Footer from './Components/Footer';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <FormularioCheckOut />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

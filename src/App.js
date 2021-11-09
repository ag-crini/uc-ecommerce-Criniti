import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer'; 
import NavBar from './Components/NavBar';
import FAQs from './Components/FAQs';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
        <Route exact path="/faqs">
          <FAQs />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer'; 
import NavBar from './Components/NavBar';
import FAQs from './Components/FAQs';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/itemdetailcontainer">
          <ItemDetailContainer />
        </Route>
        <Route path="/faqs">
          <FAQs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

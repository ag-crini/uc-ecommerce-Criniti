
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Futuro catálogo de productos'/>
    </div>
  );
}

export default App;

import './ItemListContainer.css';
import ItemCount from './ItemCount'
import ItemList from './ItemList';



export default function ItemListContainer(){

return (
  <div className="itemContainer">
    <ItemCount stock="4" initial="1"/>
    <ItemList/>
  </div>
)

}
 
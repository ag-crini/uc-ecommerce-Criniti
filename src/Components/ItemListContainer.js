import './ItemListContainer.css';

export const ItemListContainer =(props)=> {
  return (
    <div className="itemContainer">
      <p>
        {props.greeting}
      </p>
    </div>
  );
}

export default ItemListContainer;

 
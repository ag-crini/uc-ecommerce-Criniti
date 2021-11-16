import { useState } from 'react';
import './CartItem.css';

export const CartItem = ({id, pictureUrl,title,counter, price}) =>{
  

  return (

	<div key={id}>
		<img src={pictureUrl} alt={title} />
		<div>
			<h2>{title}</h2>

			<h3>Un.: {counter}</h3>

			{counter >1? (<h3>${price * counter}</h3>):(<h3>{price}</h3>)}
		</div>
	</div>
	);
}


export default CartItem; 


import logoUC from '../img/logo-uc.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom' 


export const NavBar =()=> {
  return (
    <div className="navBar">
        <Link to={"/"}><img src={logoUC} className="navLogo" alt="logo" /></Link>
        <div>
                <ul>
                    <li><Link to={"/category/mesa"}>Mesas</Link></li>
                    <li><Link to={"/category/living"}>Barras y Living</Link></li>
                    <li><Link to={"/category/otro"}>Otros</Link></li>
                    <li><Link to={"/faqs"}>Preguntas Frecuentes</Link></li>
                </ul>
        </div>  
      <CartWidget />
    </div>
  );
}

export default NavBar;

 
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
              <li><Link to={"/category/mesa"} className="navLink">Mesas</Link></li>
              <li><Link to={"/category/living"} className="navLink">Barras y Living</Link></li>
              <li><Link to={"/category/otro"} className="navLink">Otros</Link></li>
          </ul>
        </div>  
      <CartWidget />
    </div>
  );
}

export default NavBar;

 
import logoUC from './img/logo-uc.png';
import './NavBar.css';
import CartWidget from './CartWidget';


export const NavBar =()=> {
  return (
    <div className="navBar">
        <img src={logoUC} className="navLogo" alt="logo" />
        <div>
                <ul>
                    <li><a className="navLink" href="/#" target="_blank" rel="noopener noreferrer">Productos</a></li>
                    <li><a className="navLink" href="/#" target="_blank" rel="noopener noreferrer">Sucursales</a></li>
                    <li><a className="navLink" href="/#" target="_blank" rel="noopener noreferrer">Contacto</a></li>
                    <li><a className="navLink" href="/#" target="_blank" rel="noopener noreferrer">Preguntas Frecuentes</a></li>
                </ul>
        </div>  
      <CartWidget />
    </div>
  );
}

export default NavBar;

 
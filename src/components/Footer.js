import '../styles/Footer.scss';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li className='footer__menu-item'>
            <Link to='/' class='footer__menu-link'>
              A jugar
            </Link>
          </li>
          <li className='footer__menu-item'>
            <Link to='/instructions' class='footer__menu-link'>
              ¿Cómo se juega?
            </Link>
          </li>
          <li className='footer__menu-item'>
            <Link to='/options' class='footer__menu-link'>
              Más opciones
            </Link>
          </li>
        </ul>
      </nav>
      <small className='footer__copy'>© Adalab</small>
    </footer>
  );
}
export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComputer, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; // Remover useEffect
import Tooltip from './Tooltip';
import { useCart } from './CartContext';
import { useUser } from './UserContext';

function Navbar({ onOpenRegister }) {
  const { toggleCart, cartItems } = useCart();
  const { user, toggleProfile } = useUser();
  const [activeLink, setActiveLink] = useState('#home');

  function handleClick(e, link) {
    e.preventDefault();
    setActiveLink(link);
    const element = document.querySelector(link);
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth'
    });
  }

  return (
    <header className='navbar'>
      <div className="logo">
        <FontAwesomeIcon icon={faComputer} />
        <p>Computadores</p>
      </div>

      <nav>
        <ul>
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={(e) => handleClick(e, '#home')}>Home</a></li>
          <li><a href="#products" className={activeLink === '#products' ? 'active' : ''} onClick={(e) => handleClick(e, '#products')}>Produtos</a></li>
          <li><a href="#contato" className={activeLink === '#contato' ? 'active' : ''} onClick={(e) => handleClick(e, '#contato')}>Contato</a></li>
          <li>
            <Tooltip text="Carrinho">
              <FontAwesomeIcon icon={faCartShopping} onClick={toggleCart} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Tooltip>
          </li>
          <li>
            <Tooltip text={user ? 'Perfil' : 'Entrar'}>
              <FontAwesomeIcon 
                icon={faUser} 
                onClick={user ? toggleProfile : onOpenRegister}
                className="user-icon"
              />
            </Tooltip>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
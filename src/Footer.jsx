import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Central de Atendimento</a></li>
            <li><a href="#">Como Comprar</a></li>
            <li><a href="#">Prazos de Entrega</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 Computadores. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Tooltip from "./Tooltip";
import { useUser } from './UserContext';

function RegisterForm({
  onSwitchToLogin = () => {},
  onClose = () => {},
  onShowNotification = () => {},
}) {
  const [animationClass, setAnimationClass] = useState("open");
  const { registerUser } = useUser();

  useEffect(() => {
    setAnimationClass("open");
  }, []);

  function closeRegisterForm() {
    setAnimationClass("close");
    setTimeout(() => {
      onClose();
    }, 300);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    
    registerUser(userData);
    onShowNotification('Sucesso', 'Registro realizado com sucesso!', '#4CAF50');
    onClose();
  }

  function handleSocialLogin() {
    onShowNotification(
      "Login Social",
      ["Ainda não implementado", "Fale com um desenvolvedor"],
      "#ff9710"
    );
  }

  function hsl() {
    onShowNotification(
      "Não implementado",
      ["Ainda não implementado", "Fale com um desenvolvedor"],
      "#31ff38"
    );
  }

  return (
    <div className={`modalContainer ${animationClass}`}>
      <div className={`formContainer ${animationClass}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeIcon"
          onClick={closeRegisterForm}
        />

        <div className="header">
          <div className="title">
            <h1>Registre-se</h1>
          </div>
          <div className="description">
            <p>Preencha os dados para se registrar</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="nameInpCtn">
            <input type="text" id="name" name="name" placeholder="Nome completo" required />
          </div>
          <div className="cpfInpCtn">
            <input type="text" id="cpf" placeholder="" />
            <label htmlFor="cpf">CPF</label>
          </div>
          <div className="passwordInpCtn">
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <div className="birthDateInpCtn">
            <input type="date" id="birthDate" placeholder="" />
          </div>
          <div className="emailInpCtn">
            <input type="email" id="email" name="email" placeholder="E-mail" required />
          </div>
          <button type="submit" className="submit-button">Registrar</button>
        </form>

        <div className="footer">
          <div className="loginOrRegister">
            <p>
              Já tem uma conta? <a onClick={onSwitchToLogin}>Faça login</a>
            </p>
          </div>

          <div className="loginOpts">
            <div>
              <Tooltip text="Login com Github">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="ico github"
                  onClick={handleSocialLogin}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip text="Login com Google">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="ico google"
                  onClick={hsl}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip text="Login com Apple">
                <FontAwesomeIcon
                  icon={faApple}
                  className="ico apple"
                  onClick={handleSocialLogin}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

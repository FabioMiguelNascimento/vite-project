import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "./Tooltip";

function LoginForm({ onSwitchToRegister = () => {}, onClose = () => {}, onShowNotification = () => {} }) {
  const [animationClass, setAnimationClass] = useState("open");

  useEffect(() => {
    setAnimationClass("open");
  }, []);

  function closeLoginForm() {
    setAnimationClass("close");
    setTimeout(() => {
      onClose();
    }, 300); 
  }

  function handleSocialLogin() {
    onShowNotification("Login Social", ["Ainda não implementado", "Fale com um desenvolvedor"], "#ff9710");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onShowNotification("Login", ["Processando seu login...", "Por favor, aguarde"], "#1981ff");
  }

  function hsl() {
    onShowNotification("Não implementado", ["Ainda não implementado", "Fale com um desenvolvedor"],"#31ff38",);
  }

  return (
    <div className={`modalContainer ${animationClass}`}>
      <div className={`formContainer ${animationClass}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeIcon"
          onClick={closeLoginForm}
        />

        <div className="header">
          <div className="title">
            <h1>Login</h1>
          </div>
          <div className="description">
            <p>Preencha os dados para fazer login</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="emailInpCtn">
            <input type="email" id="email" placeholder="" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="passwordInpCtn">
            <input type="password" id="password" placeholder="" />
            <label htmlFor="password">Senha</label>
          </div>
          <button type="submit">Entrar</button>
        </form>

        <div className="footer">
          <div className="loginOrRegister">
            <p>
              Não tem uma conta? <a onClick={onSwitchToRegister}>Registre-se</a>
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

export default LoginForm;

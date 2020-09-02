import React from "react";
import "./styles.css";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <Layout>
      <div className="login-container">
        <div className="block active">
          <h1 className="login-main-title">Realizar Login</h1>
          <span className="login-span">
            Insira suas credenciais para para realizar login
          </span>
          <div className="account-types">
            <div className="login-checkbox doctor" type="checkbox"></div>
            <div className="login-checkbox secretary" type="checkbox"></div>
            <div className="login-checkbox admin" type="checkbox"></div>
          </div>
          <form className="login-form">
            <div className="login-input-container">
              <FontAwesomeIcon className="login-input-icon" icon={faUser} />
              <input
                className="login-input-field"
                type="text"
                placeholder="Login"
                name="login"
              ></input>
            </div>
            <div className="login-input-container">
              <FontAwesomeIcon className="login-input-icon" icon={faKey} />
              <input
                className="login-input-field"
                type="password"
                placeholder="Senha"
                name="senha"
              ></input>
            </div>
            <a href="/forgot-password">Esqueceu sua senha?</a>
            <button type="submit" className="login-main-button">
              Login
            </button>
          </form>
        </div>
        <div className="block sub">
          <h1 className="login-title">Ainda não tem uma conta?</h1>
          <div className="login-subtitle">
            <h4>Crie uma agora mesmo!</h4>
            <h4>Basta inserir seus dados pessoais.</h4>
          </div>
          <a className="login-sub-button" href="/register">
            Registrar-se
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

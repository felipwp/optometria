import React from "react";
import "./styles.css";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout specialClass={false}>
      <div className="login-container ">
        <div className="block ">
          <h1 className="login-main-title">Realizar Login</h1>
          <span className="login-span">
            Insira suas credenciais para para realizar login
          </span>
          <div className="account-types">
            <div className="login-icon doctor" ></div>
            <div className="login-icon secretary" ></div>
            <div className="login-icon admin" ></div>
          </div>
          <form className="login-form">
            <div className="input-validation-container" >
              <div className="login-input-container login">
                <FontAwesomeIcon className="login-input-icon" icon={faUser} />
                <input
                  className="login-input-field"
                  type="text"
                  placeholder="Login"
                  name="login"
                ></input>
              </div>
            </div>
            <div className="input-validation-container" >
              <div className="login-input-container  senha">
                <FontAwesomeIcon className="login-input-icon" icon={faKey} />
                <input
                  className="login-input-field"
                  type="password"
                  placeholder="Senha"
                  name="senha"
                ></input>
              </div>
            </div>
            <Link to="/forgot-password">Esqueceu sua senha?</Link>
            <Link to="/register">Criar conta</Link>
            <button className="login-main-button">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Layout>
  );
};

export default Login;

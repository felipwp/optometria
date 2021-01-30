import React, { useRef }  from "react";
import "./styles.css";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../firebase";
import cookie from "../../assets/js/cookies";
/* import { Link } from 'react-router-dom'; */

const Login = () => {
  const [users, setUsers] = React.useState([]);
  const [login, setLogin] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [authorized, setAuthorized] = React.useState(false);
  const loginRef = useRef();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();

    // resetando os cookies ao iniciar o programa
    cookie.clearCookies();
    // eslint-disable-next-line
  }, []);

  async function authorize() {
    await users.forEach(async (user) => {
      if(user.login === login && user.password === password) {
        setAuthorized(true);
        
        cookie.setCookie("fullName", user.fullName);
        cookie.setCookie("authLevel", user.occupation);
        document.location = "/patients"
      }
    });
    if(!authorized) loginRef.current.innerHTML = "Login ou senha incorretos";
  }

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
          <div className="login-form">
            <div className="input-validation-container" >
              <div className="login-input-container login">
                <FontAwesomeIcon className="login-input-icon" icon={faUser} />
                <input
                  className="login-input-field"
                  type="text"
                  placeholder="Login"
                  name="login"
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="input-validation-container" >
              <div className="login-input-container senha">
                <FontAwesomeIcon className="login-input-icon" icon={faKey} />
                <input

                  className="login-input-field"
                  type="password"
                  placeholder="Senha"
                  name="senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div style={{height: 25}}>
              <p ref={loginRef} style={{color: "var(--c9)"}}></p>
            </div>
            {/* <Link to="/forgot-password">Esqueceu sua senha?</Link> */}
            <button className="login-main-button" onClick={() => {authorize()}}>
              Login
            </button>
          </div>
        </div>
      </div>


      {/* background com animações  */}
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

import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope, faCalendar, faFileSignature, faAddressCard } from "@fortawesome/free-solid-svg-icons";
/* 
users

login
password
fullName
email
occupation 
dateJoined

*/
export default function CreateUser() {
  const [fullName, setFullName] = React.useState();
  const [login, setLogin] = React.useState();
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();
  const [occupation, setOccupation] = React.useState();
  const [dateJoined, setDateJoined] = React.useState();

  
  const [errorMessage, setErrorMessage] = React.useState();

  // deve ser criado um ref pra cada input, para que ele possa ser validado.
  // utilizar os mesmos nomes das variáveis de state, seguido de um Ref
  const fullNameRef = React.createRef([]);
  const loginRef = React.createRef([]);
  const passwordRef = React.createRef([]);
  const emailRef = React.createRef([]);
  const occupationRef = React.createRef([]);
  const dateJoinedRef = React.createRef([]);



  const validate = () => {
    
    if(fullName === "" || fullName === null || fullName === undefined) {
      fullNameRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de nome é obrigatório.");
      return;
    }
    if(login === "" || login === null || login === undefined) {
      loginRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de login é obrigatório.");
      return;
    }
    if(password === "" || password === null || password === undefined) {
      passwordRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de senha é obrigatório.");
      return;
    }
    if(email === "" || email === null || email === undefined) {
      emailRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de e-mail é obrigatório.");
      return;
    }
    if(occupation === null || occupation === null) {
      occupationRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de ocupação é obrigatório.");
      return;
    }
    if(dateJoined === "" || dateJoined === null || dateJoined === null) {
      dateJoinedRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de data de admissão é obrigatório.");
      return;
    }
    
    onCreate();

  };

  const onCreate = async () => {
    const db = firebase.firestore();
    await db.collection("users").add({
      fullName: fullName,
      login: login,
      password: password,
      email: email,
      occupation: occupation,
      dateJoined: dateJoined,
    });
    window.location.reload();

  };

  return (
    <>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
          <input
            className="modal-input-field"
            type="text"
            value={fullName}
            ref={fullNameRef}
            placeholder="Nome completo"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faUser} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Login"
            value={login}
            ref={loginRef}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faKey} />
          <input
            className="modal-input-field"
            type="password"
            placeholder="Senha"
            value={password}
            ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faEnvelope} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="E-mail"
            value={email}
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faCalendar} />
          <input
            className="modal-input-field"
            type="date"
            value={dateJoined}
            ref={dateJoinedRef}
            onChange={(e) => {
              setDateJoined(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faAddressCard} />
          <select
            ref={occupationRef}
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          >
            <option disabled defaultValue > Selecione um cargo</option>
            <option value="Secretário(a)">Secretário(a)</option>
            <option value="Optometrista">Optometrista</option>
            <option value="Administrador(a)">Administrador(a)</option>
          </select>
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={validate}>Cadastrar</button>
      </div>
    </>
  );
}

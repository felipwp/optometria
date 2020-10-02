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

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("users").add({
      fullName: fullName,
      login: login,
      password: password,
      email: email,
      occupation: occupation,
      dateJoined: dateJoined,
    });
  };

  return (
    <>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={fullName}
          placeholder="Nome completo"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faUser} />
        <input
          className="modal-input-field"
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faKey} />
        <input
          className="modal-input-field"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faEnvelope} />
        <input
          className="modal-input-field"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faCalendar} />
        <input
          className="modal-input-field"
          type="date"
          value={dateJoined}
          onChange={(e) => {
            setDateJoined(e.target.value);
          }}
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faAddressCard} />
        <select
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        >
          <option disabled selected value="Null"> Selecione um cargo</option>
          <option value="Secretário(a)">Secretário(a)</option>
          <option value="Médico(a)">Médico(a)</option>
          <option value="Administrador(a)">Administrador(a)</option>
        </select>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={onCreate}>Cadastrar</button>
      </div>
    </>
  );
}

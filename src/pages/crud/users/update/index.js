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
export default function UpdateUser({ user }) {
  const [login, setLogin] = React.useState(user.login);
  const [password, setPassword] = React.useState(user.password);
  const [email, setEmail] = React.useState(user.email);
  const [occupation, setOccupation] = React.useState(user.occupation);
  const [dateJoined, setDateJoined] = React.useState(user.dateJoined);
  const [fullName, setFullName] = React.useState(user.fullName);

  React.useEffect(() => {
    const logData = async () => {
      console.log(login)
      console.log(password)
      console.log(email)
      console.log(occupation)
    };
    logData();
    // eslint-disable-next-line
  }, []);

  const onUpdate = async () => {
    const db = firebase.firestore();
    await db.collection("users")
      .doc(user.id)
      .set({
        ...user,
        fullName,
        login,
        password,
        email,
        occupation,
        dateJoined,
      });
    window.location.reload();
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
          <option value={occupation} defaultValue>{occupation}</option>
          <option value="Secretário(a)">Secretário(a)</option>
          <option value="Médico(a)">Médico(a)</option>
          <option value="Administrador(a)">Administrador(a)</option>
        </select>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={onUpdate}>Atualizar</button>
      </div>
    </>
  );
}

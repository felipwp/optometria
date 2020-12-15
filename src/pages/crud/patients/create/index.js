import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faFileSignature, faVenusMars, faMapMarkerAlt, faPhone, faBriefcase, faIdCard, faBuilding, faUserFriends } from "@fortawesome/free-solid-svg-icons";
/* 
patients

fullName
gender
age
address
phone
professionalActivity
origin
identity
orgExp
responsible

*/
export default function CreatePatient() {
  const [fullName, setFullName] = React.useState();
  const [gender, setGender] = React.useState();
  const [age, setAge] = React.useState();
  const [address, setAddress] = React.useState();
  const [phone, setPhone] = React.useState();
  const [professionalActivity, setProfessionalActivity] = React.useState();
  const [origin, setOrigin] = React.useState();
  const [identity, setIdentity] = React.useState();
  const [orgExp, setOrgExp] = React.useState();
  const [responsible, setResponsible] = React.useState();

  
  const [errorMessage, setErrorMessage] = React.useState();

  // deve ser criado um ref pra cada input, para que ele possa ser validado.
  // utilizar os mesmos nomes das variáveis de state, seguido de um Ref
  const fullNameRef = React.createRef([]);
  const genderRef = React.createRef([]);
  const ageRef = React.createRef([]);
  const addressRef = React.createRef([]);
  const phoneRef = React.createRef([]);
  const professionalActivityRef = React.createRef([]);
  const originRef = React.createRef([]);
  const identityRef = React.createRef([]);
  const orgExpRef = React.createRef([]);
  const responsibleRef = React.createRef([]);



  const validate = () => {
    
    if(fullName === "" || fullName === null || fullName === undefined) {
      fullNameRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de nome é obrigatório.");
      return;
    }
    onCreate();

  };

  const onCreate = async () => {
    const db = firebase.firestore();
    await db.collection("patients").add({
      fullName: fullName,
      gender: gender,
      age: age,
      address: address,
      phone: phone,
      professionalActivity: professionalActivity,
      origin: origin,
      identity: identity,
      orgExp: orgExp,
      responsible: responsible,
    });
    window.location.reload();

  };

  return (
    <>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faUser} />
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
          <FontAwesomeIcon className="modal-input-icon" icon={faVenusMars} />
          <select
            ref={genderRef}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option enabled defaultValue > Gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <span>{errorMessage}</span>
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faCalendar} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Idade"
            value={age}
            ref={ageRef}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faCalendar} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Idade"
            value={age}
            ref={ageRef}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faMapMarkerAlt} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Endereço"
            value={address}
            ref={addressRef}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faPhone} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Telefone"
            value={phone}
            ref={phoneRef}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faBriefcase} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Atividade Profissional"
            value={professionalActivity}
            ref={professionalActivityRef}
            onChange={(e) => {
              setProfessionalActivity(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Procedência"
            value={origin}
            ref={originRef}
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faIdCard} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Identidade"
            value={identity}
            ref={identityRef}
            onChange={(e) => {
              setIdentity(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faBuilding} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Org. EXP"
            value={orgExp}
            ref={orgExpRef}
            onChange={(e) => {
              setOrgExp(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faUserFriends} />
          <input
            className="modal-input-field"
            type="text"
            placeholder="Responsável"
            value={responsible}
            ref={responsibleRef}
            onChange={(e) => {
              setResponsible(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={validate}>Cadastrar</button>
      </div>
    </>
  );
}

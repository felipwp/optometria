import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileSignature } from "@fortawesome/free-solid-svg-icons";
/* 
users

login
password
fullName
email
occupation 
dateJoined

*/
export default function UpdatePatient({ patient }) {
  const [fullName, setFullName] = React.useState(patient.fullName);
  const [gender, setGender] = React.useState(patient.gender);
  const [age, setAge] = React.useState(patient.age);
  const [address, setAddress] = React.useState(patient.address);
  const [phone, setPhone] = React.useState(patient.phone);
  const [professionalActivity, setProfessionalActivity] = React.useState(patient.professionalActivity);
  const [origin, setOrigin] = React.useState(patient.origin);
  const [identity, setIdentity] = React.useState(patient.identity);
  const [orgExp, setOrgExp] = React.useState(patient.orgExp);
  const [responsible, setResponsible] = React.useState(patient.responsible);

  React.useEffect(() => {
    const logData = async () => {
      console.log(fullName)
      console.log(gender)
      console.log(age)
      console.log(address)
      console.log(phone)
      console.log(professionalActivity)
      console.log(origin)
      console.log(identity)
      console.log(orgExp)
      console.log(responsible)
    };
    logData();
    // eslint-disable-next-line
  }, []);

  const onUpdate = async () => {
    const db = firebase.firestore();
    await db.collection("patients")
      .doc(patient.id)
      .set({
        ...patient,
        fullName,
        gender,
        age,
        address,
        phone,
        professionalActivity,
        origin,
        identity,
        orgExp,
        responsible,
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
          placeholder="Sexo"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={age}
          placeholder="Nome completo"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          required
      />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={address}
          placeholder="Endereço"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={phone}
          placeholder="Telefone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={professionalActivity}
          placeholder="Atividade Profissional"
          onChange={(e) => {
            setProfessionalActivity(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={origin}
          placeholder="Procedência"
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={identity}
          placeholder="Identidade"
          onChange={(e) => {
            setIdentity(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={orgExp}
          placeholder="Org. EXP"
          onChange={(e) => {
            setOrgExp(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faFileSignature} />
        <input
          className="modal-input-field"
          type="text"
          value={responsible}
          placeholder="Responsável"
          onChange={(e) => {
            setResponsible(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={onUpdate}>Atualizar</button>
      </div>
    </>
  );
}

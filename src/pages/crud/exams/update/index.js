import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileSignature, faAddressCard } from "@fortawesome/free-solid-svg-icons";
/* 
exams

login
password
fullName
email
occupation 
dateJoined

*/
export default function UpdateExam({ exam }) {
  const [reasonConsultation, setReasonConsultation] = React.useState(exam.reasonConsultation);
  const [symptoms, setSymptoms] = React.useState(exam.symptoms);
  const [rxUser, setRxUser] = React.useState(exam.rxUser);
  const [lastControl, setLastControl] = React.useState(exam.lastControl);

  React.useEffect(() => {
    const logData = async () => {
      console.log(reasonConsultation)
      console.log(symptoms)
      console.log(rxUser)
      console.log(lastControl)
    };
    logData();
    // eslint-disable-next-line
  }, []);

  const onUpdate = async () => {
    const db = firebase.firestore();
    await db.collection("exams")
      .doc(exam.id)
      .set({
        ...exam,
        reasonConsultation,
        symptoms,
        rxUser,
        lastControl,
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
          value={reasonConsultation}
          placeholder="Motivo da consulta"
          onChange={(e) => {
            setReasonConsultation(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faUser} />
        <input
          className="modal-input-field"
          type="text"
          placeholder="Sintomas"
          value={symptoms}
          onChange={(e) => {
            setSymptoms(e.target.value);
          }}
          required
        />
      </div>
      <div className="modal-input-container">
        <FontAwesomeIcon className="modal-input-icon" icon={faAddressCard} />
        <select
          onChange={(e) => {
            setRxUser(e.target.value);
          }}
        >
          <option value={rxUser} defaultValue>{rxUser}</option>
          <option value="Não">Não</option>
          <option value="Óculos">Óculos</option>
          <option value="LCG">LCG</option>
          <option value="LCRG">LCRG</option>
          <option value="Aux Baixa Visão">Aux Baixa Visão</option>
        </select>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={onUpdate}>Atualizar</button>
      </div>
    </>
  );
}

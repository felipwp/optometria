import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFileSignature, faAddressCard } from "@fortawesome/free-solid-svg-icons";


/* 
questionnaire

reasonConsultation
symptoms
personalHistory
familiarHistory
rxUser
lastControl
*/
export default function CreateQuestionnaire() {
  const [reasonConsultation, setReasonConsultation] = React.useState();
  const [symptoms, setSymptoms] = React.useState();
  const [familiarHistory, setFamiliarHistory] = React.useState();
  const [personalHistory, setPersonalHistory] = React.useState();
  const [rxUser, setRxUser] = React.useState();
  const [lastControl, setLastControl] = React.useState();


  const [errorMessage, setErrorMessage] = React.useState();
  // deve ser criado um ref pra cada input, para que ele possa ser validado.
  // utilizar os mesmos nomes das variáveis de state, seguido de um Ref
  const reasonConsultationRef = React.createRef([]);
  const symptomsRef = React.createRef([]);
  const personalHistoryRef = React.createRef([]);
  const familiarHistoryRef = React.createRef([]);
  const rxUserRef = React.createRef([]);
  const lastControlRef = React.createRef([]);

  const validate = () => {
    
    if(reasonConsultation === "" || reasonConsultation === null || reasonConsultation === undefined) {
      reasonConsultationRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de motivo da consulta é obrigatório.");
      return;
    }
    if(symptoms === "" || symptoms === null || symptoms === undefined) {
      symptomsRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de simtomas é obrigatório.");
      return;
    }
    if(personalHistory === "" || personalHistory === null || personalHistory === undefined) {
      personalHistoryRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de histórico pessoal é obrigatório.");
      return;
    }
    if(familiarHistory === "" || familiarHistory === null || familiarHistory === undefined) {
      familiarHistoryRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de histórico familiar é obrigatório.");
      return;
    }
    if(lastControl === "" || lastControl === null || lastControl === undefined) {
      lastControlRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de último controle é obrigatório.");
      return;
    }

    onCreate();

  };

  const onCreate = async () => {
    const db = firebase.firestore();
    await db.collection("exams").add({
      reasonConsultation: reasonConsultation,
      symptoms: symptoms,
      personalHistory: personalHistory,
      familiarHistory: familiarHistory,
      rxUser: rxUser,
      lastControl: lastControl,
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
            value={reasonConsultation}
            ref={reasonConsultationRef}
            placeholder="Motivo da consulta"
            onChange={(e) => {
              setReasonConsultation(e.target.value);
            }}
            required
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
            placeholder="Sintomas"
            value={symptoms}
            ref={symptomsRef}
            onChange={(e) => {
              setSymptoms(e.target.value);
            }}
            required
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
            placeholder="Antecedentes Pessoais"
            value={personalHistory}
            ref={personalHistoryRef}
            onChange={(e) => {
              setPersonalHistory(e.target.value);
            }}
            required
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
            placeholder="Antecendentes familiares"
            value={familiarHistory}
            ref={familiarHistoryRef}
            onChange={(e) => {
              setFamiliarHistory(e.target.value);
            }}
            required
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faAddressCard} />
          <select
            ref={rxUserRef}
            onChange={(e) => {
              setRxUser(e.target.value);
            }}
          >
            <option enabled defaultValue > Usuário de RX</option>
            <option value="Não">Não</option>
            <option value="Óculos">Óculos</option>
            <option value="LCG">LCG</option>
            <option value="LCRG">LCRG</option>
            <option value="Aux Baixa Visão">Aux Baixa Visão</option>
          </select>
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-main-input-container">
        <div className="modal-input-container">
          <FontAwesomeIcon className="modal-input-icon" icon={faCalendar} />
          <input
            className="modal-input-field"
            type="date"
            value={lastControl}
            ref={lastControlRef}
            onChange={(e) => {
              setLastControl(e.target.value);
            }}
          />
        </div>
        <span>{errorMessage}</span>
      </div>
      <div className="modal-button-div">
        <button className="modal-submit-button" onClick={validate}>Cadastrar</button>
        <button className="modal-button" >Próximo</button>
      </div>
    </>
  );
}

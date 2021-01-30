import React from "react";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";


/* 
lensometria rx

esfODLes - float    cilODLes - float    eixoODLes - int     AVODLes - string
esfOELes - float    cilOELes - float    eixoOELes - int     AVOELes - string
tipoLente - string  cor - string
filtro - string
observacao - string

*/
export default function CreateExam() {
  const [ esfODLes, setEsfODLes ] = React.useState();
  const [ cilODLes, setCilODLes ] = React.useState();
  const [ eixoODLes, setEixoODLes ] = React.useState();
  const [ AVODLes, setAVODLes ] = React.useState();
  const [ esfOELes, setEsfOELes ] = React.useState();
  const [ cilOELes, setCilOELes ] = React.useState();
  const [ eixoOELes, setEixoOELes ] = React.useState();
  const [ AVOELes, setAVOELes ] = React.useState();
  const [ tipoLente, setTipoLente ] = React.useState();
  const [ cor, setCor ] = React.useState();
  const [ filtro, setFiltro ] = React.useState();
  const [ observacao, setObservacao ] = React.useState();
  


  const [errorMessage, setErrorMessage] = React.useState();
  // deve ser criado um ref pra cada input, para que ele possa ser validado.
  // utilizar os mesmos nomes das variáveis de state, seguido de um Ref
  const esfODLesRef = React.createRef([]);
  const cilODLesRef = React.createRef([]);
  const eixoODLesRef = React.createRef([]);
  const AVODLesRef = React.createRef([]);
  const esfOELesRef = React.createRef([]);
  const cilOELesRef = React.createRef([]);
  const eixoOELesRef = React.createRef([]);
  const AVOELesRef = React.createRef([]);
  const tipoLenteRef = React.createRef([]);
  const corRef = React.createRef([]);
  const filtroRef = React.createRef([]);
  const observacaoRef = React.createRef([]);



  const validate = () => {
    
    if(esfODLes === "" || esfODLes === null || esfODLes === undefined) {
      esfODLesRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de motivo da consulta é obrigatório.");
      return;
    }
    if(cilODLes === "" || cilODLes === null || cilODLes === undefined) {
      cilODLesRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de simtomas é obrigatório.");
      return;
    }
    if(eixoODLes === "" || eixoODLes === null || eixoODLes === undefined) {
      eixoODLesRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de histórico pessoal é obrigatório.");
      return;
    }
    if(AVODLes === "" || AVODLes === null || AVODLes === undefined) {
      AVODLesRef.current.parentNode.nextElementSibling.style.display = "flex"; 
      setErrorMessage("O campo de histórico familiar é obrigatório.");
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
      <div className="modal-button-div">
        <button className="modal-submit-button" >Anterior</button>
        <button className="modal-submit-button" onClick={validate}>Cadastrar</button>
        <button className="modal-submit-button" >Próximo</button>
      </div>
    </>
  );
}

import React from 'react'
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../assets/svg/user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../loader";

export default function Exams({exams, loading, toggleModal, onDelete}) {
    if(loading) {
        return (
            <div className="loading-div">
                <h1>Carregando...</h1>
                <Loader/>
            </div>
        )
    }

    return (
        <table id="exams-table">
            <thead>
              <tr>
                <td></td>
                <td>Motivo da consulta</td>
                <td>Sintomas</td>
                <td>Usuário de rx</td>
                <td>Último controle</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
                {exams.map((exam) => (
                  <tr key={exam.id}>
                    <td width="8%">
                      <img src={userIcon} alt="User Icon"></img>
                    </td>
                    <td width="17%">{exam.reasonConsultation}</td>
                    <td width="15%">{exam.symptoms}</td>
                    <td width="10%">{exam.rxUser}</td>
                    <td width="15%">{exam.lastControl}</td>
                    <td width="15%">
                      <button onClick={() => toggleModal(exam)}><FontAwesomeIcon icon={faEdit}/></button>
                      <button onClick={() => onDelete(exam.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}

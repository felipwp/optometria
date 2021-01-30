import React from 'react'
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../assets/svg/user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../loader";

export default function Patients({patients, loading, toggleModal, onDelete}) {
    if(loading) {
        return (
            <div className="loading-div">
                <h1>Carregando...</h1>
                <Loader/>
            </div>
        )
    }

    return (
        <table id="patients-table">
            <thead>
              <tr>
                <td></td>
                <td>Nome Completo</td>
                <td>Sexo</td>
                <td>Idade</td>
                <td>Endereço</td>
                <td>Telefone</td>
                <td>Identidade</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td width="8%">
                      <img src={userIcon} alt="User Icon"></img>
                    </td>
                    <td width="17%">{patient.fullName}</td>
                    <td width="15%">{patient.gender}</td>
                    <td width="10%">{patient.age}</td>
                    <td width="15%">{patient.address}</td>
                    <td width="15%">{patient.phone}</td>
                    <td width="5%">{patient.identity}</td>
                    <td width="15%">
                      <button onClick={() => toggleModal(patient)}><FontAwesomeIcon icon={faEdit}/></button>
                      <button onClick={() => onDelete(patient.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}

import React from 'react'
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../assets/svg/user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../loader";

export default function Users({users, loading, toggleModal, onDelete}) {
    if(loading) {
        return (
            <div className="loading-div">
                <h1>Carregando...</h1>
                <Loader/>
            </div>
        )
    }

    return (
        <table id="users-table">
            <thead>
              <tr>
                <td></td>
                <td>Nome Completo</td>
                <td>Cargo</td>
                <td>Login</td>
                <td>E-mail</td>
                <td>Data de Admissão</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td width="8%">
                      <img src={userIcon} alt="User Icon"></img>
                    </td>
                    <td width="17%">{user.fullName}</td>
                    <td width="15%">{user.occupation}</td>
                    <td width="10%">{user.login}</td>
                    <td width="15%">{user.email}</td>
                    <td width="15%">{user.dateJoined}</td>
                    <td width="15%">
                      <button onClick={() => toggleModal(user)}><FontAwesomeIcon icon={faEdit}/></button>
                      <button onClick={() => onDelete(user.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}

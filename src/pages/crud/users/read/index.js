import React, { useRef } from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Modal from "../../../../components/modal";
import CreateUser from "../create/index";
import Sidebar from "../../../../components/sidebar";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../../assets/svg/user.svg";

/* 
users

login
password
fullName
email
occupation 
dateJoined

*/

export default function UserList(props) {
  const [users, setUsers] = React.useState([]);
  const modalRef = useRef();
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  function toggleModal() {
    modalRef.current.classList.toggle("modal--active");

    if (modalRef.current.classList.contains("modal--active")) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }
  }

  return (
    <>
      <button className="abrir" onClick={toggleModal}>
        Teste
      </button>
      <Sidebar></Sidebar>
      <Layout>
        <div className="modal" ref={modalRef}>
          <Modal function={toggleModal} title="Cadastro de Usuários">
            <CreateUser />
          </Modal>
        </div>

        <main className="main-container">
          <div className="dashboard-header">
            <div>
              <h2>
                Bem vindo, <span>Usuário!</span>
              </h2>
              <h1>Dashboard</h1>
            </div>
            <div>
              <button onClick={toggleModal} className="add-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <div class="search-input-container">
                <input
                  className="search-input-field"
                  type="text"
                  placeholder="Pesquisar..."
                />
                <FontAwesomeIcon
                  className="search-input-icon"
                  icon={faSearch}
                />
              </div>
            </div>
          </div>
          <div className="dashboard-large-card">
            <table>
              <thead>
                <td></td>
                <td>Nome Completo</td>
                <td>Cargo</td>
                <td>Login</td>
                <td>E-mail</td>
                <td>Data de Admissão</td>
                <td></td>
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
                    <td width="15%"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </Layout>
    </>
  );
}

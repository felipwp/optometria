import React, { useRef } from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Modal from "../../../../components/modal";
import CreateUser from "../create";
import Sidebar from "../../../../components/sidebar";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Users from '../../../../components/models/users';
import Pagination from '../../../../components/pagination';
/* 
users

login
password
fullName
email
occupation 
dateJoined

*/

export default function ReadUser() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const modalRef = useRef();
  
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
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

  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = users.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
            <Users users={currentData} loading={loading}/>
            <Pagination dataPerPage={dataPerPage} totalData={users.length} paginate={paginate}/>
          </div>
        </main>
      </Layout>
    </>
  );
}

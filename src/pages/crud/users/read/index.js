import React, { useRef } from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Modal from "../../../../components/modal";
import CreateUser from "../create";
import UpdateUser from "../update";
import Sidebar from "../../../../components/sidebar";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Users from '../../../../components/models/users';
import Pagination from '../../../../components/pagination';
import cookie from '../../../../assets/js/cookies';

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
  const [modalComponent, setModalComponent] = React.useState();
  const [modalTitle, setModalTitle] = React.useState();
  const [userFullName, setUserFullName] = React.useState();
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

    setUserFullName(cookie.getCookie("fullName"));
    // eslint-disable-next-line
  }, []);

  function toggleModal(user) {
    console.log(user);
    setModalComponent(null);
    modalRef.current.classList.toggle("modal--active");

    if (modalRef.current.classList.contains("modal--active")) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }

    if(user === "no-data") {
      setModalTitle("Cadastro de Usuários");
      setModalComponent(<CreateUser/>);
    } else {
      setModalTitle(`Atualizando ${user.occupation} ${user.fullName}`);
       setModalComponent(<UpdateUser user={user}/>);
    }
  }

  async function onDelete(id) {
    const db = firebase.firestore();
    await db.collection("users").doc(id).delete();
    window.location.reload();
  }

  
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = users.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Sidebar authLevel={cookie.getCookie("authLevel")}></Sidebar>
      <Layout>
        <div className="modal" ref={modalRef}>
          <Modal function={toggleModal} title={modalTitle}>
            {modalComponent}
          </Modal>
        </div>

        <main className="main-container">
          <div className="dashboard-header">
            <div>
              <h2>
                Bem vindo, <span>{userFullName}!</span>
              </h2>
              <h1>Dashboard</h1>
            </div>
            <div>
              <button onClick={()=>{toggleModal("no-data")}} className="add-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <div className="search-input-container">
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
            <Users users={currentData} loading={loading} toggleModal={toggleModal} onDelete={onDelete}/>
            <Pagination dataPerPage={dataPerPage} totalData={users.length} paginate={paginate}/>
          </div>
        </main>
      </Layout>
    </>
  );
}

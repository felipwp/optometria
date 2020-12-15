import React, { useRef } from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Modal from "../../../../components/modal";
import CreatePatient from "../create";
import UpdatePatient from "../update";
import Sidebar from "../../../../components/sidebar";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Patients from '../../../../components/models/patients';
import Pagination from '../../../../components/pagination';
import cookie from '../../../../assets/js/cookies';

/* 
patients

login
password
fullName
email
occupation 
dateJoined

*/

export default function ReadPatient() {
  const [patients, setPatients] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [modalComponent, setModalComponent] = React.useState();
  const [modalTitle, setModalTitle] = React.useState();
  const modalRef = useRef();
  
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection("patients").get();
      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    fetchData();
  
    console.log(cookie.getCookie("fullName"));
    console.log(cookie.getCookie("authLevel"));
    // eslint-disable-next-line
  }, []);

  function toggleModal(patient) {
    console.log(patient);
    setModalComponent(null);
    modalRef.current.classList.toggle("modal--active");

    if (modalRef.current.classList.contains("modal--active")) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }

    if(patient === "no-data") {
      setModalTitle("Cadastro de Pacientes");
      setModalComponent(<CreatePatient/>);
    } else {
      setModalTitle(`Atualizando ${patient.occupation} ${patient.fullName}`);
       setModalComponent(<UpdatePatient patient={patient}/>);
    }
  }

  async function onDelete(id) {
    const db = firebase.firestore();
    await db.collection("patients").doc(id).delete();
    window.location.reload();
  }

  
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = patients.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Sidebar></Sidebar>
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
                Bem vindo, <span>Usuário!</span>
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
            <Patients patients={currentData} loading={loading} toggleModal={toggleModal} onDelete={onDelete}/>
            <Pagination dataPerPage={dataPerPage} totalData={patients.length} paginate={paginate}/>
          </div>
        </main>
      </Layout>
    </>
  );
}

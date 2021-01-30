import React, { useRef } from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Modal from "../../../../components/modal";
import CreateExam from "../create/questionario";
import UpdateExam from "../update";
import Sidebar from "../../../../components/sidebar";
import firebase from "../../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Exams from '../../../../components/models/exams';
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

export default function ReadExam() {
  const [exams, setExams] = React.useState([]);
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
      const data = await db.collection("exams").get();
      setExams(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line
    setUserFullName(cookie.getCookie("fullName"));
  }, []);

  function toggleModal(exam) {
    console.log(exam);
    setModalComponent(null);
    modalRef.current.classList.toggle("modal--active");

    if (modalRef.current.classList.contains("modal--active")) {
      modalRef.current.style.display = "flex";
    } else {
      modalRef.current.style.display = "none";
    }

    if(exam === "no-data") {
      setModalTitle("Questionário");
      setModalComponent(<CreateExam/>);
    } else {
      setModalTitle(`Atualizando ${exam.reasonConsultation} ${exam.symptoms}`);
       setModalComponent(<UpdateExam exam={exam}/>);
    }
  }

  async function onDelete(id) {
    const db = firebase.firestore();
    await db.collection("exams").doc(id).delete();
    window.location.reload();
  }

  
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = exams.slice(indexOfFirstData, indexOfLastData);

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
            <Exams exams={currentData} loading={loading} toggleModal={toggleModal} onDelete={onDelete}/>
            <Pagination dataPerPage={dataPerPage} totalData={exams.length} paginate={paginate}/>
          </div>
        </main>
      </Layout>
    </>
  );
}

import React from "react";
import "./styles.css";
import Logo from "../../assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog,  faUserNurse, faUserPlus, faNotesMedical, faUsers, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <div className="sidebar">
        <div>
          <Link className="sidebar-logo" to="/">
            <img src={Logo} alt="Logo"></img>
            <div>
              <h1>Optomed</h1>
              <span>Sistema de prontuários</span>
            </div>
          </Link>
          <div className="sidebar-navigation">
            <div className="sidebar-title-div">Administração</div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faUserNurse} />
              <Link to="/register" className="sidebar-link" >Listagem de Funcionarios</Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faUserPlus} />
              <Link className="sidebar-link" to="/register">
                Cadastro de funcionários
              </Link>
            </div>
            <div className="sidebar-title-div">Médicos</div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faClipboard} />
              <Link className="sidebar-link" to="/exam/">
                Listagem de consultas
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faNotesMedical} />
              <Link className="sidebar-link" to="/exam/add">
                Nova consulta
              </Link>
            </div>
            <div className="sidebar-title-div">Secretaria</div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faUsers} />
              <Link className="sidebar-link" to="/patients/">
                Listagem de pacientes
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="navigation-icon" icon={faUserPlus} />
              <Link className="sidebar-link" to="/exam/add">
                Novo paciente
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-logo sidebar-item no-hover">
          <FontAwesomeIcon className="navigation-icon" icon={faCog} />
          <Link className="sidebar-link" to="/exam/add">
            Configurações
          </Link>
        </div>
      </div>
    </aside>
  );
}

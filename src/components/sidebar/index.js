import React from "react";
import "./styles.css";
import Logo from "../../assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNurse,
  faUserPlus,
  faCog,
  faNotesMedical,
  faUsers,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.adminNavRef = React.createRef([]);
    this.medicNavRef = React.createRef([]);
    this.secretaryNavRef = React.createRef([]);
    this.state = {
      refs: [this.adminNavRef, this.medicNavRef, this.secretaryNavRef]
    };
  }

  componentDidMount() {
    this.state.refs.forEach((ref) => {
      ref.current.addEventListener("click", () => {
        const items = ref.current.nextElementSibling;
        ref.current.classList.toggle("sidebar-nav--active");

        if (ref.current.classList.contains("sidebar-nav--active")) {
          items.style.maxHeight = items.scrollHeight + "px";
          items.style.borderWidth = "0 0 1px 0";
        } else {
          items.style.maxHeight = 0;
          items.style.borderWidth = "0";
        }
      });
    });
  }

  render() {
    return (
      <aside className="sidebar">
        <div>
          <Link className="sidebar-logo" to="/">
            <img src={Logo} alt="Logo"></img>
            <h5>Optometria</h5>
          </Link>
          <nav className="sidebar-nav" ref={this.adminNavRef}>
            <div>
              <h1>Administração</h1>
              <h2>Funcionários, cadastros...</h2>
            </div>
          </nav>

          <div className="navigation-section">
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUserNurse} />
              <Link to="/employees" className="sidebar-link">
                Listagem de Funcionarios
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUserPlus} />
              <Link className="sidebar-link" to="/register">
                Cadastro de funcionários
              </Link>
            </div>
            
          </div>
          <nav className="sidebar-nav" ref={this.medicNavRef}>
            <div>
              <h1>Médicos</h1>
              <h2>Ver consultas, listar pacientes...</h2>
            </div>
          </nav>
          <div className="navigation-section">
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faClipboard} />
              <Link className="sidebar-link" to="/exam/">
                Listagem de consultas
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faNotesMedical} />
              <Link className="sidebar-link" to="/exam/add">
                Nova consulta
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
              <Link className="sidebar-link" to="/patients/">
                Listagem de pacientes
              </Link>
            </div>
          </div>
          <nav className="sidebar-nav" ref={this.secretaryNavRef}>
            <div>
              <h1>Secretaria</h1>
              <h2>Marcar consultas, novos pacientes...</h2>
            </div>
          </nav>
          <div className="navigation-section">
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faClipboard} />
              <Link className="sidebar-link" to="/exam/">
                Listagem de consultas
              </Link>
            </div>

            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
              <Link className="sidebar-link" to="/patients/">
                Listagem de pacientes
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUserPlus} />
              <Link className="sidebar-link" to="/exam/add">
                Novo paciente
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-last-item">
          <FontAwesomeIcon className="sidebar-icon" icon={faCog} />
          <button className="sidebar-last-link" >
            Configurações
          </button>
        </div>
      </aside>
    );
  }
}
export default Sidebar;

import React from "react";
import "./styles.css";
import Logo from "../../assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNurse,
  faSignOutAlt,
  faUsers,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import cookies from '../../assets/js/cookies';
import auth from '../../assets/js/userLevel';

import { Link } from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.adminNavRef = React.createRef([]);
    this.medicNavRef = React.createRef([]);
    this.secretaryNavRef = React.createRef([]);
    this.state = {
      admin: "flex",
      medic: "flex",
      secretary: "flex",
      refs: [this.adminNavRef, this.medicNavRef, this.secretaryNavRef]
    };
  }

  logout() {
    cookies.clearCookies();
    document.location = "/";
  }

  userLevel() {
    var userLevel = auth.getUserLevel(this.props.authLevel);
    console.log("Prop do userLevel: ", this.props.authLevel)
    console.log("User level: ", userLevel)
    switch (userLevel) {
      case 0:
        this.setState({ secretary: "flex" });
        this.setState({ medic : "none" });
        this.setState({ admin : "none" });
        break;
      case 1:
        this.setState({ secretary : "flex" });
        this.setState({ medic : "flex" });
        this.setState({ admin : "none" });
        break;
      case 2:
        this.setState({ secretary : "flex" });
        this.setState({ medic : "flex" });
        this.setState({ admin : "flex" });
        break;
      default: 
        break;
      
    }
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
    this.userLevel();
  }


  render() {
    return (
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo" >
            <img src={Logo} alt="Logo"></img>
            <h5>Optometria</h5>
          </div>

          {/* ADMINISTRAÇÃO */}
          <nav className="sidebar-nav" ref={this.adminNavRef} style={{display: this.state.admin}}>
            <div>
              <h1>Administração</h1>
              <h2>Funcionários, cadastros...</h2>
            </div>
          </nav>
          <div className="navigation-section" style={{display: this.state.admin}}>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUserNurse} />
              <Link to="/register" className="sidebar-link">
                Listagem de Funcionarios
              </Link>
            </div>            
          </div>






          {/* OPTOMETRISTAS */}
          <nav className="sidebar-nav" ref={this.medicNavRef} style={{display: this.state.medic}}>
            <div>
              <h1>Optometristas</h1>
              <h2>Ver consultas, listar pacientes...</h2>
            </div>
          </nav>
          <div className="navigation-section" style={{display: this.state.medic}}>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faClipboard} />
              <Link className="sidebar-link" to="/exams">
                Listagem de consultas
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
              <Link className="sidebar-link" to="/patients">
                Listagem de pacientes
              </Link>
            </div>
          </div>




          {/* SECRETARIA */}
          <nav className="sidebar-nav" ref={this.secretaryNavRef} style={{display: this.state.secretary}}>
            <div>
              <h1>Secretaria</h1>
              <h2>Marcar consultas, novos pacientes...</h2>
            </div>
          </nav>
          <div className="navigation-section" style={{display: this.state.secretary}}>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faClipboard} />
              <Link className="sidebar-link" to="/exams">
                Listagem de consultas
              </Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
              <Link className="sidebar-link" to="/patients">
                Listagem de pacientes
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-last-item">
          <FontAwesomeIcon className="sidebar-icon" icon={faSignOutAlt} />
          <button className="sidebar-last-link" onClick={() => this.logout()}>
            Sair
          </button>
        </div>
      </aside>
    );
  }
}
export default Sidebar;

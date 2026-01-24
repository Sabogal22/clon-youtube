import React from "react";
import "../assets/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark youtube-navbar">
          <div className="container-fluid">
            {/* Logo y menú hamburguesa */}
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler youtube-sidebar-toggler"
                type="button"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand youtube-brand clean-link" to={"/"}>
                <div className="d-flex align-items-center">
                  <i className="fab fa-youtube youtube-logo-icon"></i>
                  <span className="youtube-brand-text">YouTube</span>
                  <sup className="youtube-superscript">CL</sup>
                </div>
              </Link>
            </div>

            {/* Barra de búsqueda centrada */}
            <div className="d-none d-lg-flex justify-content-center flex-grow-1 mx-4">
              <form className="d-flex w-75 youtube-search-form">
                <div className="input-group youtube-search-container">
                  <input
                    type="search"
                    className="form-control youtube-search-input"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                  <button className="btn youtube-search-button" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <button className="btn youtube-mic-button ms-2" type="button">
                  <i className="fas fa-microphone"></i>
                </button>
              </form>
            </div>

            {/* Elementos del lado derecho */}
            <div className="d-flex align-items-center">
              {/* Barra de búsqueda para móviles */}
              <div className="d-lg-none me-3">
                <button className="btn youtube-search-mobile" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Iconos del lado derecho */}
              <div className="d-none d-md-flex align-items-center">
                <button className="btn youtube-nav-icon" title="Crear">
                  <i className="fas fa-video"></i>
                </button>
                <button
                  className="btn youtube-nav-icon mx-2"
                  title="Notificaciones"
                >
                  <i className="fas fa-bell"></i>
                  <span className="youtube-notification-badge">3</span>
                </button>
              </div>

              {/* Avatar del usuario */}
              <div className="dropdown">
                <button
                  className="btn youtube-user-avatar dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="youtube-avatar-initial">U</div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user-circle me-2"></i>Tu canal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-youtube me-2"></i>YouTube Studio
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cog me-2"></i>Configuración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-moon me-2"></i>Apariencia: Oscuro
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-language me-2"></i>Idioma: Español
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-question-circle me-2"></i>Ayuda
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-comment-alt me-2"></i>Enviar
                      comentarios
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt me-2"></i>Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barra de búsqueda para móviles (expandida) */}
          <div className="container-fluid d-lg-none mt-2 youtube-mobile-search-expanded">
            <form className="d-flex">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control youtube-search-input"
                  placeholder="Buscar en YouTube"
                />
                <button className="btn youtube-search-button" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="btn youtube-mic-button ms-2" type="button">
                <i className="fas fa-microphone"></i>
              </button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

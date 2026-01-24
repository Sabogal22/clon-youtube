import React from "react";
import "../assets/Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="youtube-sidebar">
        {/* Sección principal */}
        <ul className="sidebar-nav">
          <li className="sidebar-section">
            <h6 className="sidebar-section-title">Principal</h6>
            <ul className="sidebar-menu">
              <li className="sidebar-item active">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-home sidebar-icon"></i>
                  <span className="sidebar-text">Inicio</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-fire sidebar-icon"></i>
                  <span className="sidebar-text">Tendencias</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-compass sidebar-icon"></i>
                  <span className="sidebar-text">Explorar</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-play-circle sidebar-icon"></i>
                  <span className="sidebar-text">Shorts</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-photo-video sidebar-icon"></i>
                  <span className="sidebar-text">Suscripciones</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sección Biblioteca */}
          <li className="sidebar-section">
            <h6 className="sidebar-section-title">Tú</h6>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-history sidebar-icon"></i>
                  <span className="sidebar-text">Historial</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-clock sidebar-icon"></i>
                  <span className="sidebar-text">Ver más tarde</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-thumbs-up sidebar-icon"></i>
                  <span className="sidebar-text">Videos que me gustan</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-download sidebar-icon"></i>
                  <span className="sidebar-text">Descargas</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-film sidebar-icon"></i>
                  <span className="sidebar-text">Tus videos</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sección Suscripciones */}
          <li className="sidebar-section">
            <h6 className="sidebar-section-title">Suscripciones</h6>
            <ul className="sidebar-menu">
              <li className="sidebar-channel">
                <a href="#" className="sidebar-link">
                  <div className="channel-avatar">
                    <span className="channel-avatar-initial">M</span>
                  </div>
                  <span className="sidebar-text">Music Channel</span>
                </a>
              </li>
              <li className="sidebar-channel">
                <a href="#" className="sidebar-link">
                  <div className="channel-avatar">
                    <span className="channel-avatar-initial">T</span>
                  </div>
                  <span className="sidebar-text">Tech Reviews</span>
                </a>
              </li>
              <li className="sidebar-channel">
                <a href="#" className="sidebar-link">
                  <div className="channel-avatar">
                    <span className="channel-avatar-initial">G</span>
                  </div>
                  <span className="sidebar-text">Gaming World</span>
                </a>
              </li>
              <li className="sidebar-channel">
                <a href="#" className="sidebar-link">
                  <div className="channel-avatar">
                    <span className="channel-avatar-initial">C</span>
                  </div>
                  <span className="sidebar-text">Cooking Master</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-chevron-down sidebar-icon"></i>
                  <span className="sidebar-text">Mostrar más</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sección Explorar */}
          <li className="sidebar-section">
            <h6 className="sidebar-section-title">Explorar</h6>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-music sidebar-icon"></i>
                  <span className="sidebar-text">Música</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-basketball-ball sidebar-icon"></i>
                  <span className="sidebar-text">Deportes</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-gamepad sidebar-icon"></i>
                  <span className="sidebar-text">Videojuegos</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-newspaper sidebar-icon"></i>
                  <span className="sidebar-text">Noticias</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-lightbulb sidebar-icon"></i>
                  <span className="sidebar-text">Aprendizaje</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sección Configuración */}
          <li className="sidebar-section">
            <h6 className="sidebar-section-title">Más de YouTube</h6>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fab fa-youtube sidebar-icon youtube-red"></i>
                  <span className="sidebar-text">YouTube Premium</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-film sidebar-icon"></i>
                  <span className="sidebar-text">Películas</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-signal sidebar-icon"></i>
                  <span className="sidebar-text">En vivo</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sección Configuración */}
          <li className="sidebar-section">
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-cog sidebar-icon"></i>
                  <span className="sidebar-text">Configuración</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-flag sidebar-icon"></i>
                  <span className="sidebar-text">Historial de denuncias</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-question-circle sidebar-icon"></i>
                  <span className="sidebar-text">Ayuda</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fas fa-comment-alt sidebar-icon"></i>
                  <span className="sidebar-text">Enviar comentarios</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mini Sidebar (versión compacta para hover) */}
        <div className="youtube-mini-sidebar">
          <ul className="mini-sidebar-nav">
            <li className="mini-sidebar-item active">
              <a href="#" className="mini-sidebar-link">
                <i className="fas fa-home"></i>
                <span className="mini-sidebar-text">Inicio</span>
              </a>
            </li>
            <li className="mini-sidebar-item">
              <a href="#" className="mini-sidebar-link">
                <i className="fas fa-fire"></i>
                <span className="mini-sidebar-text">Tendencias</span>
              </a>
            </li>
            <li className="mini-sidebar-item">
              <a href="#" className="mini-sidebar-link">
                <i className="fas fa-photo-video"></i>
                <span className="mini-sidebar-text">Suscripciones</span>
              </a>
            </li>
            <li className="mini-sidebar-item">
              <a href="#" className="mini-sidebar-link">
                <i className="fas fa-compass"></i>
                <span className="mini-sidebar-text">Explorar</span>
              </a>
            </li>
            <li className="mini-sidebar-item">
              <a href="#" className="mini-sidebar-link">
                <i className="fas fa-play-circle"></i>
                <span className="mini-sidebar-text">Shorts</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
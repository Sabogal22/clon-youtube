import React from "react";
import "../assets/Footer.css";

class Footer extends React.Component {
  render() {
    return(
      <>
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="fab fa-youtube footer-logo-icon"></i>
              <span>YouTube Clone</span>
            </div>

            <div className="footer-links">
              <a href="#" className="footer-link">
                Acerca de
              </a>
              <a href="#" className="footer-link">
                Contacto
              </a>
              <a href="#" className="footer-link">
                Privacidad
              </a>
              <a href="#" className="footer-link">
                Términos
              </a>
              <a href="#" className="footer-link">
                Desarrolladores
              </a>
            </div>

            <div className="footer-copyright">
              © 2026 YouTube Clone - Proyecto educativo. No afiliado a Google LLC.
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../assets/logo 1.svg"
import menu from "../images/menu.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#7F8A6C`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: `0.5rem`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", fontSize: "48px" }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: "black",
            textShadow: "1px 1px 3px #890909 ",
          }}
        >
          <em>{siteTitle}</em>
        </Link>
      </h1>
      <img src={logo} alt="" />
    </div>
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div style={{ textAlign: "center" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {" "}
              <img src={menu} alt="" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  <strong>Accueil</strong>
                </Link>
                <hr />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <strong>Thés</strong>
                </a>
                <hr />
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/greenTea">
                    Thés Verts
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/blackTea">
                    Thés Noirs
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/whiteTea">
                    Thés Blancs
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/mixtTea">
                    Thés Blends
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/smokeTea">
                    Thés Fumés
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/roiboos">
                    Rooibos
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/oolong">
                    Oolong
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coffee">
                  <strong>Cafés</strong>
                </Link>
                <hr />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/infusion">
                  <strong>Infusions</strong>
                </Link>
                <hr />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <strong>Autres</strong>
                </a>
                <hr />
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/accessories">
                    Accessoires/Vaisselles
                  </Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/epicerie">
                    Epicerie fine
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

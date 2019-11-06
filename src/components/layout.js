import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main style={{ minHeight: "100vh" }}>{children}</main>
      </div>
      <footer
        className="container"
        style={{
          marginTop: "10%",
        }}
      >
        © {new Date().getFullYear()}, Built by
        {` `}
        <a
          href="https://ephyrasdev.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ephyras'Dev
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

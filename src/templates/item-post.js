import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ItemPost = ({ data }) => {
  return (
    <Layout>
      <div className="row" style={{ paddingTop: "5%" }}>
        <div className="col-md-6">
          <div
            style={{ paddingLeft: "10%", paddingRight: "5%", paddingTop: "5%" }}
          >
            <h2 style={{ textAlign: "left", fontSize: "40px" }}>
              <stong>{data.markdownRemark.frontmatter.title}</stong>
            </h2>
            <p
              style={{
                color: "#7F8A6C",
                marginBottom: "0.5rem",
                fontSize: "18px",
              }}
            >
              {data.markdownRemark.frontmatter.description}
            </p>

            {data.markdownRemark.frontmatter.composition ? (
              <div>
                <p
                  style={{
                    color: "#8F0000",
                    fontSize: "24px",
                    paddingTop: "5%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong>Composition:</strong>
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  {data.markdownRemark.frontmatter.composition}
                </p>
              </div>
            ) : null}

            {data.markdownRemark.frontmatter.temps ||
            data.markdownRemark.frontmatter.degree ||
            data.markdownRemark.frontmatter.time ? (
              <div>
                {" "}
                <p
                  style={{
                    color: "#8F0000",
                    fontSize: "24px",
                    paddingTop: "5%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong>Conseil de dégustation: </strong>
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Temps d'infusion: </strong>
                  {data.markdownRemark.frontmatter.temps}{" "}
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Température de l'eau:</strong>{" "}
                  {data.markdownRemark.frontmatter.degree}
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  {" "}
                  <strong>Moment de la journée:</strong>{" "}
                  {data.markdownRemark.frontmatter.time}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <img
            style={{
              width: "400px",
              height: "400px",
              position: "relative",
              transform: "translateX(-50%)",
              left: "50%",
              border: "1px solid lightgrey",
              boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
            }}
            src={data.markdownRemark.frontmatter.img}
            alt=""
          />
        </div>
      </div>
    </Layout>
  )
}

export default ItemPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        composition
        degree
        img
        temps
        time
        title
        categorie
        description
        sous_categorie
      }
      fields {
        slug
      }
    }
  }
`

import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ItemCard from "../components/itemCard"
const Roiboos = ({ data }) => {
  return (
    <Layout>
      <div>
        <SEO title="Roiboos" />
        <h2>Roiboos</h2>
        <hr />
        <br />
        <br />
        <div className="row">
          {data.allMarkdownRemark.totalCount === 0 ? (
            <h2> Il n'y a pas encore de Roiboos</h2>
          ) : (
            data.allMarkdownRemark.edges.map(({ node }) => (
              <ItemCard
                key={node.id}
                cardTitle={node.frontmatter.title}
                cardImg={node.frontmatter.img}
                cardText={node.frontmatter.description}
                cardLink={node.fields.slug}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Roiboos

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { sous_categorie: { eq: "Roiboos" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            composition
            img
            sous_categorie
            title
            categorie
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

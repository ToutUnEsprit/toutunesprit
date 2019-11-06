import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ItemCard from "../components/itemCard"

const Infusion = ({ data }) => {
  return (
    <Layout>
      <div>
        <SEO title="Infusion" />

        <h2>Infusion</h2>
        <hr />
        <br />
        <br />
        <div className="row">
          {data.allMarkdownRemark.totalCount === 0 ? (
            <h2> Il n'y a pas encore d'Infusion</h2>
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

export default Infusion

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { categorie: { eq: "Infusion" } } }
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

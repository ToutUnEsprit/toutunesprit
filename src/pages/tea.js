import React from "react"
import Layout from "../components/layout"
import ItemCard from "../components/itemCard"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Tea = ({ data }) => {
  return (
    <Layout>
      <SEO title="Thés" />
      <div>
        <h2>Nos Thés</h2>
        <hr />
        <br />
        <br />
        <div className="row">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ItemCard
              key={node.id}
              cardTitle={node.frontmatter.title}
              cardImg={node.frontmatter.img}
              cardText={node.frontmatter.description}
              cardLink={node.fields.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tea

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { categorie: { eq: "Thé" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            composition
            img
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

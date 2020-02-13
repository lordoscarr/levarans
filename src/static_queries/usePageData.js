import { graphql, useStaticQuery } from "gatsby"

export default function usePageData() {
  const data = useStaticQuery(graphql`
    query getPageData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___title }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
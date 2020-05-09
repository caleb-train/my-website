import Layout from "../components/layout"
import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query blogList {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `);

  return <Layout>
    <div>
      <h1 style={{ display: 'inlineBlock', borderBottom: '1px solid'}}>
        Gatsby Garb Blog
      </h1>
      <>
            <h4>{data.allMarkdownRemark.totalCount}</h4>
            {data.allMarkdownRemark.edges.map(({node})=> (
              <div key={node.id}>
                <h3>{node.frontmatter.title} <span style={{ color: '#bbb' }}>- {node.frontmatter.date}</span></h3>
              </div>
            ))}
          </>

    </div>
  </Layout>
}
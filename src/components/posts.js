import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PostsComponent = () => (
    <StaticQuery
        query={graphql`
      {
        allContentfulPost {
          nodes {
            title
            image {
              fluid {
                src
              }
            }
            slug
          }
        }
      }
    `}
        render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    ></StaticQuery>
)

export default PostsComponent
import React from "react"
import { graphql } from "gatsby"

const PostsPageComponent = ({ data }) => {
    console.log(data);
    const { post: { title } } = data
    return (
        <>
            <h2>Post:{title}</h2>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>

    )
}

export const data = graphql`
{
    post:contentfulPost {
      title
      slug
      image {
        fluid {
          src
        }
      }
    }
    allContentfulPost {
      nodes {
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default PostsPageComponent
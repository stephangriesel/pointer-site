import React from "react"
import { graphql } from "gatsby"

const PostsPageComponent = ({ data }) => {
    console.log(data);
    const { post: { title } } = data
    return (
        <>
            <h2>Post:{title}</h2>
        </>
    )
}

export const data = graphql`
{
    post:contentfulPost {
      title
      slug
    }
  }
`

export default PostsPageComponent
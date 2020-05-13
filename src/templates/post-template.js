import React from "react"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
query GetSinglePost($slug:String) {
    post: contentfulPost(slug: {eq: $slug}) {
      title
      postText {
        postText
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default PostTemplate
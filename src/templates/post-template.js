import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'

// Test DATA:
// const PostTemplate = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const PostTemplate = ({ data: { post: { title, image: { fluid }, postText: { postText } } } }) => {
  return <Layout>
    <section>
      <article>
        <Image fluid={fluid} alt={title} />
      </article>
      <article>
        <h1>{title}</h1>
        <p>{postText}</p>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
query GetSinglePost($slug:String) {
    post: contentfulPost(slug: {eq: $slug}) {
      title
      postText {
        postText
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default PostTemplate
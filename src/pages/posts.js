import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const PostsPageComponent = ({ data }) => {
  // console.log(data);
  // const { post: { title } } = data
  const { allContentfulPost: { nodes: posts },
  } = data
  console.log("<<POSTS>>")
  console.log(posts);
  return (
    // Test:START
    // <>
    //     <h2>Post:{title}</h2>
    //     <pre>{JSON.stringify(data, null, 4)}</pre>
    // </>
    // Test: END
    <Layout>
      <section>
        {posts.map(post => {
          console.log(post)
          return <article key={post.id}>
            <Image fluid={post.image.fluid} alt={post.title}></Image>
            <h1>{post.title}</h1>
            <Link to={`/posts/${post.slug}`}>Read more</Link>
          </article>
        })}
      </section>
    </Layout>
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
        id
      }
    }
  }
`

export default PostsPageComponent
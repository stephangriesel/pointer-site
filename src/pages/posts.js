import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import style from '../css/post.module.css'

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
      <section className={style.postWrapper}>
        {posts.map(post => {
          console.log(post)
          return <section key={post.id}>
            <article>
              <Image fluid={post.image.fluid} alt={post.title}></Image>
            </article>
            <article>
              <h1>{post.title}</h1>
              <Link to={`/posts/${post.slug}`}>Read more</Link>
            </article>
          </section>
        })}
      </section>
      <div>
        <Link to="/">Back to homepage</Link>
      </div>
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
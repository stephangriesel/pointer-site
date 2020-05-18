import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
// import style from '../css/post.module.css'

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
      <SEO title="Blog" />
      <section>
        {posts.map(post => {
          console.log(post)
          return <section key={post.id} className="post-wrapper">
            <article className="img-wrapper">
              <Image className="single-img" fixed={post.image.fixed} alt={post.title}></Image>
            </article>
            <article>
              <h1>{post.title}</h1>
              <p>{post.shortText}</p>
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
      fixed {
        src
      }
    }
  }
  allContentfulPost {
    nodes {
      slug
      title
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      postText {
        postText
      }
      id
      shortText
    }
  }
}
`

export default PostsPageComponent
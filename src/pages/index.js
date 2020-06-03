import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from '../components/SEO';
import Posts from '../components/posts';
import Layout from '../components/Layout';

const getData = graphql`
    {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
`

export default () => {
  const response = useStaticQuery(getData);
  console.log(response);
  return (
    <Layout>
      <SEO title="Main Page" />
      <p>Index Page</p>
      <h1>Static Query Posts</h1>
      <Link to="/posts">Posts page</Link>
      <Posts />
    </Layout>
  )
}

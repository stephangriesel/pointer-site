import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from './components/SEO';
import Posts from './components/posts';

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
    <>
      <SEO />
      <p>Index Page</p>
      <Posts />
    </>
  )
}

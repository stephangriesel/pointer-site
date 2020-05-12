const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query GetPosts {
      posts:allContentfulPost {
        nodes {
          slug
        }
      }
    }
    `)
    console.log('<< POST RESULT TEST >>')
    console.log(JSON.stringify(result))
    result.data.posts.nodes.forEach((post) => {
        createPage({
            path: `/posts/${post.slug}`,
            component: path.resolve(`src/templates/post-template.js`),
            context: {
                slug: post.slug,
            }
        })
    })
}
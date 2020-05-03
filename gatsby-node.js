/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require("gatsby-source-filesystem")
const { resolve } = require("path")

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      // The node you'd like to convert to a path
      node,
      // Method used to get a node
      getNode,
      // The base path for your files.
      basePath: "posts",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            fields {
              slug
            }
            timeToRead
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const POSTS_PER_PAGE = 6
    const NUM_PAGES = Math.ceil(posts.length / POSTS_PER_PAGE)

    Array.from({ length: NUM_PAGES }).forEach((_, index) => {
      createPage({
        path: index === 0 ? "/" : `/page/${index + 1}`,
        component: resolve(`./src/templates/blog-list.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          numPages: NUM_PAGES,
          currentPage: index + 1,
        },
      })
    })
  })
}

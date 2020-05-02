import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

/**
 *   -- Page context sended to the page
 *
 *   limit
 *   skip
 *   numPages
 *   currentPage
 */
const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <SEO title="Home" />

      {posts.map(
        (
          {
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          },
          index
        ) => (
          <PostItem
            key={index}
            slug={slug}
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}

      <Pagination
        isFirst={currentPage === 1}
        currentPage={currentPage}
        isLast={currentPage === numPages}
        nextPage={`/page/${currentPage + 1}`}
        numPages={numPages}
        prevPage={currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`}
      />
    </Layout>
  )
}

/**
 * É executado automagicamente pelo gatsby e coloca nas props do componente
 */
export const query = graphql`
  query PostListPaged($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
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
      }
    }
  }
`

export default BlogList

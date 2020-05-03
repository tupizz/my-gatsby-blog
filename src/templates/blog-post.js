import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import * as S from "./../components/Post/styles"

const BlogPost = ({ data, pageContext }) => {
  // Query que é feito quando a pagina é buildada pelo gatsby
  const post = data.markdownRemark

  // Contexto enviado pelo gatsby-node para a págins
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts previous={previous} next={next} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

/**
 * É executado automagicamente pelo gatsby e coloca nas props do componente
 */
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost

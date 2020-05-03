import React from "react"
import propTypes from "prop-types"
import * as S from "./styles"

export default function RecommendedPosts({ next, previous }) {
  return (
    <S.RecommendedWrapper>
      {/* Se tiver previous imprime a seguir... */}
      {previous && (
        <S.RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {/* Se tiver next imprime a seguir... */}
      {next && (
        <S.RecommendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

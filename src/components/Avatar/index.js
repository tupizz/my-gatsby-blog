import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styles"

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

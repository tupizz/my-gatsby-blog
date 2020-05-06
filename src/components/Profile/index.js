import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "./../Avatar"
import * as S from "./styles"

export default function Profile() {
  const {
    site: {
      siteMetadata: { position, title, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
          title
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg="#16202c" duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfilePosition>{position}</S.ProfilePosition>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

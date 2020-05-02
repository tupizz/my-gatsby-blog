import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

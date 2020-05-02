import React from "react"

import {
  Github,
  Twitter,
  Youtube,
  Instagram,
} from "styled-icons/boxicons-logos"

import * as S from "./styles"
import { links } from "./content"

const Icons = {
  Github,
  Twitter,
  Youtube,
  Instagram,
}

export default function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <S.SocialLinksItem key={index}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

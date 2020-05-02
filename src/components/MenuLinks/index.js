import React from "react"

import * as S from "./styles"
import { links } from "./content"

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, index) => (
          <S.MenuLinksItem key={index}>
            <S.MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

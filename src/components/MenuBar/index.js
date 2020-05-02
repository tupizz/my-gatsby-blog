import React from "react"

import { Home } from "styled-icons/boxicons-solid"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular"
import { Bulb as Light } from "styled-icons/boxicons-regular"
import { Grid } from "styled-icons/boxicons-solid"

import * as S from "./styles"

export default function MenuBar() {
  return (
    <S.MenuBarWrapper>
      {/* Top */}
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      {/* Bottom */}
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema">
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import * as S from "./styles"

export default function Sidebar() {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
    </S.SidebarWrapper>
  )
}

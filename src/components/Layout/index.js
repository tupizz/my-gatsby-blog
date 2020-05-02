import React from "react"
import PropTypes from "prop-types"
import Profile from "./../Profile"

import * as S from "./styles"
import { GlobalStyles } from "./../../styles/global"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />

      <Sidebar />

      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

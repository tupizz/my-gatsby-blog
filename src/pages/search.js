import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

export default function SearchPage() {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  )
}

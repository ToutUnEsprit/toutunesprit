import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BoutiqueSection from "./homepage/boutiqueSection"
import DiscoverSection from "./homepage/discoverSection"
import AboutSection from "./homepage/aboutSection"
import ContactSection from "./homepage/contactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BoutiqueSection />
    <AboutSection />
    <DiscoverSection />
    <ContactSection />
  </Layout>
)

export default IndexPage

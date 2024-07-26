import React from "react"
import Seo from "../components/seo"

import Layout from "../components/layout"
import ServicesHeader from "../components/services/servicesHeader"
import ServicesExtra from "../components/services/servicesExtra"
import ServicesPage from "../components/services/servicesPage"

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Services"
        description="Services that TFE Productions provides to its customers"
      ></Seo>
      <ServicesHeader></ServicesHeader>
      <ServicesPage></ServicesPage>
      <ServicesExtra></ServicesExtra>
    </Layout>
  )
}

export default Services

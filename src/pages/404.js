import * as React from "react"
import Button from "../components/Atoms/button"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" description="404: Not found" />
    <div className="404-p ">
      <h1 className="text-white">404: Not Found</h1>
      <p className="text-white">
        You just hit a route that doesn&#39;t exist...
      </p>
      <Link to="/">
        <Button
          title="Return Home"
          colorClass="text-white"
          marginClass="mt-5"
        ></Button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage

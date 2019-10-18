import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Page Not Found" />
    <Header className="error">
      <h1>404</h1>
    </Header>
    <div id='main'>
      <section className="main">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'

export default function (props) {
  return(
    <Layout>
      <Helmet title="Aaron Thompson - Projects" />
      <Header>
        <h1>My Projects</h1>
        <p>The projects I have completed and the story behind them</p>
      </Header>
      <Link to="/" className="button home">
        Back Home
      </Link>
      <NavBar items={['projects']} names={['Projects']} />
    </Layout>
  )
}
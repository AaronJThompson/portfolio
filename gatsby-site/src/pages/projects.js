import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'
import Project from '../components/Project'
import ScrollToTop from '../components/ScollToTop'

export default function ({ data }) {
  return (
    <Layout>
      <Helmet title="Aaron Thompson - Projects" />
      <Header>
        <h1>My Projects</h1>
        <p>The projects I have completed and the story behind them</p>
      </Header>
      <Link to="/" className="button home">
        Back Home
      </Link>
      <NavBar items={['projects', 'footer']} names={['Projects', 'Contact Me']} />
      <div id="main">
        <section id="projects" className="main special">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <ul className="projects">
            {data.portfolio.projects.map(proj => {
              return <Project {...proj} />
            })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  portfolio {
    projects {
      title
      img_src
      git_link
      deploy_link
      short_desc
      article
    }
  }
}
`
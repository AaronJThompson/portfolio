import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'
import Project from '../components/Project'
import _projectList from '../content/projects.json';

export default function (props) {
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
      <NavBar items={['projects']} names={['Projects']} />
      <div id="main">
        <section id="intro" className="main special">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <ul className="projects">
            {_projectList.map(proj => {
              return <Project {...proj} />
            })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
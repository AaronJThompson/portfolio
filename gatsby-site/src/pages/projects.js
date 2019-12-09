import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'
import Project from '../components/Project'

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
      <div id="main">
        <section id="intro" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="projects">
              <Project img_src="https://imgur.com/FVK9QmN.png" title="Bravo" git_link="https://github.com/bravolabs" deploy_link="https://saybravo.io/" short_desc="Bravo is an employee recognition and incentive platform aimed at small to medium-sized teams built in 8 weeks with 8 developers"/>
              <Project img_src="https://imgur.com/C6uYsJN.png" title="Water My Plants" git_link="https://github.com/bw-water-my-plants" deploy_link="https://water-my-plants-554a4.firebaseapp.com/" short_desc="Water My Plants is a plant watering reminder and scheduler built by a team of 3 at Lambda School in 1 week"/>
              <Project img_src="https://imgur.com/NjLjiJS.png" title="Sleep Tracker" git_link="https://github.com/build-week-sleep-tracker" deploy_link="https://bw-sleep-tracker-fe.netlify.com/" short_desc="Sleep Tracker is an app enabling users to track their sleep and receive feedback and reccomendations on their sleep patterns. This was built by 6 developers in 1 week" a/>
            </ul>
        </section>
      </div>
    </Layout>
  )
}
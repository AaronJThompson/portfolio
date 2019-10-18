import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <Header>
          <h1>My Skills</h1>
          <p>All of the skills I've accumulated over the years</p>
        </Header>
        <div id="main">
          <section id="languages" className="main special">
            <header className="major">
              <h2>Languages</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style5 fab fa-js-square"></span>
                <h2>Javascript</h2>
              </li>
              <li>
                <span className="icon medium style2 fab fa-html5"></span>
                <h2>HTML</h2>
              </li>
              <li>
                <span className="icon medium style3 fab fa-css3"></span>
                <h2>CSS</h2>
              </li>
              <li>
                <span className="icon medium fas fa-database"></span>
                <h2>SQL</h2>
              </li>
              <li>
                <span className="icon medium fas fa-database"></span>
                <h2>SQL</h2>
              </li>
              <li>
                <span className="icon medium fab fa-python"></span>
                <h2>Python</h2>
              </li>
              <li>
                <span className="icon medium fas fa-code"></span>
                <h2>Lua/LuaJIT</h2>
              </li>
            </ul>
          </section>
          <section id="frameworks" className="main special">
            <header className="major">
              <h2>Frameworks</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style5 fab fa-react"></span>
                <h2>ReactJS</h2>
              </li>
              <li>
                <span className="icon medium style5 fas fa-code"></span>
                <h2>ReduxJS</h2>
              </li>
              <li>
                <span className="icon medium style5 fab fa-node-js"></span>
                <h2>NodeJS</h2>
              </li>
              <li>
                <span className="icon medium style5 fas fa-server"></span>
                <h2>Express</h2>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

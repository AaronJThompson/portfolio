import React from 'react'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Aaron Thompson - Skills" />
        <Header>
          <h1>My Skills</h1>
          <p>All of the skills I've accumulated over the years</p>
        </Header>

        <NavBar items={['languages', 'frameworks']} names={['Languages', 'Frameworks']} />
        <div id="main">
          <section id="languages" className="main special reduced">
            <header>
              <h2>Languages</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style5 fab fa-js-square"></span>
                <h3>Javascript</h3>
              </li>
              <li>
                <span className="icon medium style2 fab fa-html5"></span>
                <h3>HTML</h3>
              </li>
              <li>
                <span className="icon medium style3 fab fa-css3"></span>
                <h3>CSS</h3>
              </li>
              <li>
                <span className="icon medium fas fa-database"></span>
                <h3>SQL</h3>
              </li>
              <li>
                <span className="icon medium fab fa-python"></span>
                <h3>Python</h3>
              </li>
              <li>
                <span className="icon medium fas fa-code"></span>
                <h3>Lua/LuaJIT</h3>
              </li>
            </ul>
          </section>
          <section id="frameworks" className="main special reduced">
            <header>
              <h2>Frameworks</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style5 fab fa-react"></span>
                <h3>ReactJS</h3>
              </li>
              <li>
                <span className="icon medium style5 fas fa-code"></span>
                <h3>ReduxJS</h3>
              </li>
              <li>
                <span className="icon medium style5 fab fa-node-js"></span>
                <h3>NodeJS</h3>
              </li>
              <li>
                <span className="icon medium style5 fas fa-server"></span>
                <h3>Express</h3>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

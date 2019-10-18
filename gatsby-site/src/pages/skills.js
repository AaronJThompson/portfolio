import React from 'react'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import Header from '../components/Header'

class Skills extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Aaron Thompson - Skills" />
        <Header>
          <h1>My Skills</h1>
          <p>All of the skills I've accumulated over the years</p>
        </Header>

        <NavBar items={['languages', 'frameworks', 'workflows', 'footer']} names={['Languages', 'Frameworks', 'Workflows', 'Contact Me']} />
        <div id="main">
          <section id="languages" className="main special reduced">
            <header>
              <h2>Languages</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style-js fab fa-js-square"></span>
                <h3>Javascript</h3>
              </li>
              <li>
                <span className="icon medium style-html fab fa-html5"></span>
                <h3>HTML</h3>
              </li>
              <li>
                <span className="icon medium style-css fab fa-css3"></span>
                <h3>CSS</h3>
              </li>
              <li>
                <span className="icon medium style-sql fas fa-database"></span>
                <h3>SQL</h3>
              </li>
              <li>
                <span className="icon medium style-python fab fa-python"></span>
                <h3>Python</h3>
              </li>
              <li>
                <span className="icon medium style-lua fas fa-moon"></span>
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
                <span className="icon medium style-react fab fa-react"></span>
                <h3>ReactJS</h3>
              </li>
              <li>
                <span className="icon medium style-redux fas fa-box-open"></span>
                <h3>ReduxJS</h3>
              </li>
              <li>
                <span className="icon medium style-node fab fa-node-js"></span>
                <h3>NodeJS</h3>
              </li>
              <li>
                <span className="icon medium style5 fas fa-server"></span>
                <h3>Express</h3>
              </li>
            </ul>
          </section>
          <section id="workflows" className="main special reduced">
            <header>
              <h2>Workflows and Methodologies</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style1 fas fa-server"></span>
                <h3>REST API's</h3>
              </li>
              <li>
                <span className="icon medium style1 fas fa-user-lock"></span>
                <h3>Authentication</h3>
              </li>
              <li>
                <span className="icon medium style2 fas fa-pencil-ruler"></span>
                <h3>Web Design</h3>
              </li>
              <li>
                <span className="icon medium style3 fas fa-file-code"></span>
                <h3>Single Page Applications</h3>
              </li>
              <li>
                <span className="icon medium style4 fas fa-vial"></span>
                <h3>Test Driven Development</h3>
              </li>
              <li>
                <span className="icon medium style5 fas fa-undo-alt"></span>
                <h3>Agile development</h3>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Skills

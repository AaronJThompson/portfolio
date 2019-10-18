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
          <section id="languages" className="main special skills">
            <header className="major">
              <h2>Languages</h2>
            </header>
            <ul className="languages">
              <li>
                <span className="icon medium style5 fab fa-js-square"></span>
              </li>
              <li>
                <span className="icon medium style2 fab fa-html5"></span>
              </li>
              <li>
                <span className="icon medium style3 fab fa-css3"></span>
              </li>
              <li>
                <span className="icon medium fas fa-database"></span>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

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
            <table className="alt">
              <tbody>
                <tr>
                  <td>
                    <span className="icon medium style1 fa-code"></span>
                  </td>
                  <td>
                    <span className="icon medium style1 fa-code"></span>
                  </td>
                  <td>
                    <span className="icon medium style1 fa-code"></span>
                  </td>
                  <td>
                    <span className="icon medium style1 fa-code"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

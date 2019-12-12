import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import headshot from '../assets/images/headshot.png'
import MainHeader from '../components/MainHeader'
import Layout from '../components/layout'
import NavBar from '../components/NavBar'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Helmet title="Aaron Thompson" />

        <MainHeader />

        <NavBar items={["intro", "work", "footer"]} names={["Introduction", "My Work", "Contact Me"]} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hey, I'm Aaron!</h2>
                </header>
                <p>
                  Passionate software engineer thriving on product oriented and efficient solutions to problems, that aid people in their everyday lives. Have been coding as a hobby since the age of 11 and have devoted the last 9 months to the Lambda School programme in order to rapidly grow my skills into a fully fledged developer. Now looking for my first paid role in software development.
                </p>
              </div>
              <span className="image">
                <img src={headshot} alt="" />
              </span>
            </div>
          </section>

          <section id="work" className="main special">
            <header className="major">
              <h2>My Work</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fas fa-code"></span>
                <h3>Skills</h3>
                <p>
                  Over the years I have accrued many skills, both in my own time and at Lambda School. See what I have learned and what I can bring to your company...
                </p>
                <Link to="/skills" className="button">
                    See my skills
                </Link>
              </li>
              <li>
                <span className="icon major style3 fas fa-rocket"></span>
                <h3>Projects</h3>
                <p>
                  I have completed many projects to a professional standard. Some lasting months, others lasting just days. See the full details and their stories...
                </p>
                <Link to="/projects" className="button">
                    See my projects
                </Link>
              </li>
              <li>
                <span className="icon major style5 fas fa-file"></span>
                <h3>CV/Resume</h3>
                <p>
                  Donwload my latest resume here...
                </p>
                <a target="_blank" href="https://drive.google.com/uc?export=download&id=18AY38h8iVbWtYXAEqbEAg7zu2ypduXkj" className="button">
                <i class="fas fa-cloud-download-alt" /> Download
                </a>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

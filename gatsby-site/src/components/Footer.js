import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section className="contact">
      <h2>Contact Me</h2>
      <dl className="vertical">
        <dt>Location</dt>
        <dd>Berkshire, UK</dd>
        <dt>Phone</dt>
        <dd>(+44) 07715569122</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto: aaronjthompson98@gmail.com">aaronjthompson98@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/AaronJThompson"
            className="icon fab fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aaron-j-t/" className="icon fab fa-linkedin alt">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; 2019 Aaron Thompson. <br /> Template: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer

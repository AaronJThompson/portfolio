import React from 'react';

export default function(props) {
  const { img_src, title, git_link, deploy_link, short_desc, long_desc} = props;

  return (
    <li className="project">
      <header>
        <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
      </header>
      <footer>
        <h2>{title}</h2>
        <p className="short_desc">{short_desc}</p>
        <div className="links">
          {git_link ? <a href={git_link} target="_blank" className="button">
            <i className="fab fa-github" /> Github
          </a> : null}
          {deploy_link ? <a href={deploy_link} target="_blank" className="button">
            <i className="fas fa-rocket" /> Deployed
          </a> : null}
        </div>
      </footer>
    </li>
  )
}
import React from 'react';

export default function(props) {
  const { img_src, title, git_link, deploy_link, short_desc, long_desc} = props;

  return (
    <div className="project">
      <header>
        <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
        <h2>{title}</h2>
      </header>
      <footer>
        <p className="short_desc">{short_desc}</p>
        <a href={git_link} target="_blank" className="button">
          Github
        </a>
        <a href={deploy_link} target="_blank" className="button">
          Deployed
        </a>
      </footer>
    </div>
  )
}
import React from 'react';

export default function(props) {
  const { img_src, title, git_link, deploy_link, short_desc, long_desc} = props;

  return (
    <div className="project">
      <header>
        <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
        <h2>{title}</h2>
      </header>
    </div>
  )
}
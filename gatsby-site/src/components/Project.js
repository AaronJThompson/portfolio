import React, { useState } from 'react';
import { Remarkable } from 'remarkable'
import Modal from './Modal';

const ArticleSection = (props) => {
  const { content } = props
  let md = new Remarkable({
    breaks: true,
    linkTarget: "_blank"
  });
  let markdown = md.render(content);
  return (
    <section dangerouslySetInnerHTML={{__html:markdown}} />
  )
}

export default function(props) {
  const { img_src, title, git_link, deploy_link, short_desc, article} = props;

  const [modalActive, setModalActive] = useState(false);

  const handleReadMore = (e) => {
    e.preventDefault();
    setModalActive(true);
  }

  const handleModalClose = (e) => {
    setModalActive(false);
  }

  return (
    <>
    {
      article && article.length > 0 ? (<Modal active={modalActive} bgClick={handleModalClose}>
        <span onClick={handleModalClose} className="close-modal">&#x2715;</span>
        <article className="project-article">
          <h1>{title}</h1>
          <div className="project-article-content">
            <header>
              <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
            </header>
            <ArticleSection content={article} />
          </div>
        </article>
      </Modal>) : null
    }
      <li className="project">
        <header>
          <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
        </header>
        <footer>
          <h2>{title}</h2>
          <p className="short_desc">{short_desc}</p>
          {article && article.length > 0 ? <a href="#" onClick={handleReadMore}>Read more...</a> : null}
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
    </>
  )
}
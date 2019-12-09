import React, { useState } from 'react';
import Modal from './Modal';

const ArticleSection = (props) => {
  const { title, content } = props
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      <p>{content}</p>
    </section>
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
        <article className="project-article">
          <h1>{title}</h1>
          <div className="project-article-content">
            <header>
              <div className="image" style={{backgroundImage: "url(" + img_src + ")"}} />
            </header>
            {
              article.map(item => {
                return <ArticleSection {...item} />
              })
            }
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
          <a href="#" onClick={handleReadMore}>Read more...</a>
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
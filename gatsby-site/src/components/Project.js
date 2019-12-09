import React, { useState } from 'react';
import Modal from './Modal';

export default function(props) {
  const { img_src, title, git_link, deploy_link, short_desc, long_desc} = props;

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
      <Modal active={modalActive} bgClick={handleModalClose}>
        <div>

        </div>
      </Modal>
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
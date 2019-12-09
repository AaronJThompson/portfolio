import React from 'react';

const Modal = (props) => {
  let { active, children, bgClick } = props;

  if (bgClick === null) {
    bgClick = (e) => {return};
  }

  const stopBubble = (e) => {
    e.stopPropagation();
  }

  return (
    <section onClick={bgClick} className={`modal${active ? " active" : ""}`}>
      <div onClick={stopBubble} className="modal-content">
        {children}
      </div>
    </section>
  )
}

export default Modal;
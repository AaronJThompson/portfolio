import React, { useEffect } from 'react';

const Modal = (props) => {
  let { active, children, bgClick } = props;

  if (bgClick === null) {
    bgClick = (e) => {return};
  }

  const stopBubble = (e) => {
    e.stopPropagation();
  }

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [active])


  return (
    <section onClick={bgClick} className={`modal${active ? " active" : ""}`}>
      <div onClick={stopBubble} className="modal-content">
        {children}
      </div>
    </section>
  )
}

export default Modal;
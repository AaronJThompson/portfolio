import React from 'react';

const Modal = (props) => {
  const { active, children } = props;

  return (
    <section className={`modal${active ? " active" : ""}`}>
      <div className="modal-content">
        {children}
      </div>
    </section>
  )
}

export default Modal;
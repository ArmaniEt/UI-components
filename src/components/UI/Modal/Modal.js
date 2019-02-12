import React from 'react';
import './Modal.css';

const Modal = (props) => {
  return(
      <div>
          <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
              <p>Some modal content</p>
          </div>
      </div>
  )
};


export default Modal;
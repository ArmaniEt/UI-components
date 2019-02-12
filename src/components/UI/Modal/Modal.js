import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return(
      <div>
          <Backdrop show={props.show} cancel={props.close}/>
          <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
              <h3 className="Modal-Title">{props.title}</h3>
              <i onClick={props.close} className="fas fa-times"> </i>
              <hr/>
              <p>Some modal content</p>
          </div>
      </div>
  )
};


export default Modal;
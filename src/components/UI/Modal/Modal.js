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
              {props.buttons.map((item, index) =>
                  <button key={index} onClick={item.clicked} className={item.type}>{item.label}</button>
              )}

          </div>
      </div>
  )
};


export default Modal;
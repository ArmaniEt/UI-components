import React from 'react';

const Modal = (props) => {
  return(
      <div>
          <div className={"Modal" + (props.show ? ' Modal-show' : '')}>

          </div>
      </div>
  )
};


export default Modal;
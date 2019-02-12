import React from 'react';
import './Button.css';

function Button(props) {
    return(
        <div className="Button-Wrapper">
            <button
                onClick={props.clicked}
                className='Button'
            >
                Show modal
            </button>
        </div>
    )

}


export default Button;
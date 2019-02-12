import React from 'react';
import './Button.css';

function Button(props) {
    return(
        <div>
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
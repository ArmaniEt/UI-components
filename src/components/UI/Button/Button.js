import React from 'react';


function Button(props) {
    return(
        <div>
            <button
                className={['Button', props.btnType].join(' ')}

            >
                Show modal
            </button>
        </div>
    )

}


export default Button;
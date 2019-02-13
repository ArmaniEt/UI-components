import React from 'react';
import './Alert.css';


function Alert(props) {
    return(
        <div className={'Alert-Wrapper' + (props.type === 'warning' ? ' warning':' success')}>
            {props.type === 'warning' ? <p className='Alert-Text'>This is a warning type alert!</p>
                : <p className='Alert-Text'>This is a success type alert!</p>}
        </div>
    )

}

export default Alert;
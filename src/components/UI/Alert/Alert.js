import React from 'react';
import './Alert.css';


function Alert(props) {
    return (
        <div className={'Alert' + (props.show ? ' Alert-Show': '') + (props.type === 'warning' ? ' warning' : ' success')}>

            {props.dismiss === undefined ? null : <i onClick={props.dismiss} className="fas fa-times for_alert"> </i>}

            {props.type === 'warning' ? <p className='Alert-Text'>This is a warning type alert!</p>
                : <p className='Alert-Text'>This is a success type alert!</p>}
        </div>

    )

}

export default Alert;
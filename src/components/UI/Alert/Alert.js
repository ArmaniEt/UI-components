import React from 'react';
import './Alert.css';


function Alert(props) {
    let alertType;
    // for different types of alerts
    switch(props.type) {
        case "warning":
            alertType = 'warning';
            break;
        case "success":
            alertType = 'success';
            break;
        case "primary":
            alertType = 'primary_alert';
            break;
    }

    return (
        <div className={'Alert' + (props.show ? ' Alert-Show': '') + ' ' + alertType}>
            {props.children}
            {props.dismiss === undefined ? null : <i onClick={props.dismiss} className="fas fa-times for_alert"> </i>}
        </div>

    )

}

export default Alert;
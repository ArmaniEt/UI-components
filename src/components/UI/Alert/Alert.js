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
        <div onClick={props.isDismiss ? props.dismiss : null} className={'Alert' + (props.show ? ' Alert-Show': '') + ' ' + alertType}>
            {props.children}
            {props.isDismiss ? null : <i onClick={props.dismiss} className="fas fa-times for_alert"> </i>}

            {props.timer(0)}
        </div>

    )

}

//{props.dismiss === undefined ? null : <i onClick={props.dismiss} className="fas fa-times for_alert"> </i>}
// this line of code for closing alert with icon, or not close alert if dismiss props is not passed
export default Alert;
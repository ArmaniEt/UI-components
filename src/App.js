import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import Alert from './components/UI/Alert/Alert';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.alertShow = false;
        this.state.modalShow = false;
    }


    customAlert = () => {
        let state = {...this.state};
        state.alertShow = true;
        this.setState(state);
    };


    openModal = () => {
        let state = {...this.state};
        state.modalShow = true;
        this.setState(state);
    };

    closeModal = () => {
        let state = {...this.state};
        state.modalShow = false;
        this.setState(state);
    };

    closeAlert = () => {
        let state = {...this.state};
        state.alertShow = false;
        this.setState(state);
    };

    render() {

        // buttons configs
        let buttons = [{type: 'primary', label: 'Continue', clicked: this.customAlert}, //add handler here
            {type: 'danger', label: 'Close', clicked: this.closeModal}];

        let isDisMissAble = true; //change this variable
        return (
            <div>
                <Modal
                    show={this.state.modalShow}
                    title="Some modal Title"
                    close={this.closeModal}
                    buttons={buttons}
                />
                <Button
                    clicked={this.openModal}
                />
                <Alert
                    isDismiss={isDisMissAble} // this is a toggle for closing alert
                    // (clicked on whole element or if property false on close icon)

                    type="primary" // add type here, properties for alert: 'warning', 'success', 'primary'
                    show={this.state.alertShow}
                    dismiss={this.closeAlert} // this handler can be not passed, then close button not be shown
                ><p className="Alert-Text">This is warning type alert!</p></Alert>
            </div>
        );
    }
}

export default App;

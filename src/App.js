import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';


const BUTTON_CONFIGS = [
    {type: 'primary', label: 'Continue', clicked: undefined}, //add handler here
    {type: 'danger', label: 'Close', clicked: undefined}
];


class App extends Component {
    constructor(props){
        super(props);

        this.state = {};
        this.state.buttons = BUTTON_CONFIGS;
        this.state.buttons[0].clicked = this.usualAlert;
        this.state.buttons[1].clicked = this.closeModal;
        this.state.modalShow = false;
    }


    usualAlert = () => {
      alert('This is alert message');
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

    render() {
        return (
            <div>
                <Modal
                    show={this.state.modalShow}
                    title="Some modal Title"
                    close={this.closeModal}
                    buttons={this.state.buttons}
                />
                <Button
                    clicked={this.openModal}
                />
            </div>
        );
    }
}

export default App;

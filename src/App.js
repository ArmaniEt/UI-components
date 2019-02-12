import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {};

        this.state.modalShow = false;
    }



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
                />
                <Button
                    clicked={this.openModal}
                />
            </div>
        );
    }
}

export default App;

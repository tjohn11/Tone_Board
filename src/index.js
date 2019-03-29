/*
Project: Tone_Board
Author: Trevor Johnson
File Name: App.js

App.js contains component definition for the App component.
App.js imports materialize css files
App.js renders app to DOM

App.js top Hierarchy container

App.js does not currently take/pass any props
*/


import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import './styles/Reset.css';
import './styles/App.css';
import Header from './Components/Header';
import MiddleContainer from './Components/MiddleContainer';
import Piano from './Components/PianoRoll';
import Mixer from './Components/Mixer';


class App extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            width: 700
        }
    }

    setWidth(mid_width) {
        this.setState({width: mid_width});
    }*/

    render() {
        return (
            <div id='appContainer'>
                <Header/>
                <MiddleContainer/>
                <Piano/>
                <Mixer/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
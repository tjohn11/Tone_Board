import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import './styles/Reset.css';
import './styles/App.css';
import Header from './Header';
import MiddleContainer from './MiddleContainer';
import Mixer from './Mixer';


class App extends Component {

    render() {
        return (
         <div id='appContainer'>
             <Header/>
             <MiddleContainer/>
         </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import Presets from './PresetList';
import GeneratorGrid from './GeneratorContainer';


class MiddleContainer extends Component{
    render() {
        return (
            <div id='middleContainer'>
                <Presets/>
                <GeneratorGrid/>
            </div>
        );
    }
};

export default MiddleContainer;
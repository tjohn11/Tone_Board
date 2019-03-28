/*
Project: Tone_Board
Author: Trevor Johnson
File Name: MiddleContainer.js

MiddleContainer.js is contains component definition for MiddleContainer.
MiddleContainer contains PresetList and GridContainer components

MiddleContainer does not currently have any state or take/pass any props
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/MiddleContainer.css';
import PresetList from './PresetList';
import GridContainer from './GridContainer';


class MiddleContainer extends Component{
    render() {
        return (
            <div id='middleContainer'>
                <PresetList/>
                <GridContainer/>
            </div>
        );
    }
};

export default MiddleContainer;
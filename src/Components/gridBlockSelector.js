/*
Project: Tone_Board
Author: Trevor Johnson
File Name: gridBlockSelector.js

gridBlockSelector.js contains component definition for an array of buttons
to select parent GridBlocks type.

gridBlockSelector takes 2 functions makeOsc() and makeEnv() as props

*/


import React from 'react';
import '../styles/Reset.css';
import '../styles/GridBlock.css'


const gridBlockSelector = (props) =>{

        return [
            <a  className='addOscBtn waves-effect btn'
                onClick={props.makeOsc}
                key='osc_btn'>
                <span>Oscillator</span>
            </a>,
            <a  className='addEnvBtn waves-effect btn'
                key='env_btn'
                onClick={props.makeEnv}>
                <span>Envelope</span>
            </a>
        ];
};

export default gridBlockSelector;
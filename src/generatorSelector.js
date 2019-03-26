import React from 'react';
import './styles/Reset.css';
import './styles/App.css';


const generatorSelector = (props) => {

    return [
        <a  className='addOscBtn waves-effect btn'
            key='osc_btn'
            onClick={props.makeOsc}>
            Oscillator
        </a>,
        <a  className='addEnvBtn waves-effect btn'
            key='env_btn'
            onClick={props.makeEnv}>
            Envelope
        </a>
    ];
};

export default generatorSelector;

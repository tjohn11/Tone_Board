/*
Project: Tone_Board
Author: Trevor Johnson
File Name: Oscillator.js

Oscillator.js contains component definition for the Oscillator component.
Oscillators reside inside GridBlock tiles and will render when a user has
chosen to add an envelope to their synthesizer board.

Oscillator has state to contain frequency knob value
Oscillator does not take any props
Oscillator passes function renderKnob1Val() to update frequency knob value state
as props to Dial as renderValue().
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/Oscillator.css';
import * as skins from 'react-rotary-knob-skin-pack';
import GenericDial from './GenericDial';
import OscillatorTypeSelect from './oscillatorTypeSelect';


class Oscillator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            knob1Value: parseInt('0'),
            knob2Value: parseInt('0')
        };

        this.getKnob1Val = this.getKnob1Val.bind(this);
        this.getKnob2Val = this.getKnob2Val.bind(this);
    }

    getKnob1Val(value) {
        this.setState({
            knob1Value: value
        });
    }


    getKnob2Val(value) {
        this.setState({
            knob2Value: value
        });
    }

    render() {
        return (
            <div className='oscillator'>
                <div className='labels'>
                    <span style={{display: 'block', marginBottom: '.5rem'}}>Frequency</span>
                    <span style={{display: 'block', marginBottom: '.5rem'}}>Volume</span>
                </div>
                <div className='knobSection'>
                    <GenericDial
                        style={{ display: "inline-block" }}
                        min={0}
                        max={100}
                        width={200}
                        height={200}
                        unlockDistance={50}
                        skin={skins.s11}
                        getValue={this.getKnob1Val}
                    />

                    <GenericDial
                        style={{ display: "inline-block" }}
                        min={0}
                        max={100}
                        width={200}
                        height={200}
                        unlockDistance={50}
                        skin={skins.s12}
                        getValue={this.getKnob2Val}
                    />
                </div>
                <div className='knobValues'>
                    <span className='knobValue'>{this.state.knob1Value} GHZ</span>
                    <span className='knobValue'>{this.state.knob2Value}</span>
                </div>

                <OscillatorTypeSelect/>
            </div>
        );
    }
}

export default Oscillator;

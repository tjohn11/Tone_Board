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
import GenericDial from './GenericDial';
import '../styles/Reset.css';
import '../styles/Oscillator.css';


class Oscillator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            knob1Value: parseInt('0')
        };

        this.renderKnob1Val = this.renderKnob1Val.bind(this);
    }

    renderKnob1Val(value) {
        this.setState({
            knob1Value: value
        });
    }

    render() {
        return (
            <div className='oscillator'>
                <div className='knobSection'>
                    <GenericDial
                        style={{ display: "inline-block" }}
                        min={0}
                        max={100}
                        width={150}
                        height={150}
                        unlockDistance={100}
                        renderValue={this.renderKnob1Val}
                    />
                    <span className='knobValue'>{this.state.knob1Value}GHZ</span>
                </div>
            </div>
        );
    }
}

export default Oscillator;
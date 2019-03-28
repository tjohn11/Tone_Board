/*
Project: Tone_Board
Author: Trevor Johnson
File Name: GenericDial.js

GenericDial.js contains component definition for a reusable dial component.
GenericDial takes props for
styling
height
width
min value
max value
precision drag set (unlockDistance)
start value (value)
To render dial value to ui pass render function in parent as prop renderValue
*/

import React, { Component } from 'react';
import { Knob } from 'react-rotary-knob';
import '../styles/Reset.css';
import '../styles/Dial.css';



class GenericDial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(val) {
        //ignore change if distance is greater than defined
        //here we use a distance of 200 because our max value is 1000
        //change if needed
        const maxDistance = 300;
        let distance = Math.abs(val - this.state.value);
        if (distance > maxDistance){}
        else {
            this.setState({ value: val });
            let { renderValue } = this.props;
            renderValue(Math.floor(val));
        }
    }
    render() {
        let { style, min, max, width, height, unlockDistance} = this.props;

        return (
            <div>
                <Knob value={this.state.value}
                      onChange={this.handleOnChange}
                      style={style}
                      min={min}
                      max={max}
                      width={width}
                      height={height}
                      unlockDistance={unlockDistance}
                />
            </div>
        );
    }
}

export default GenericDial;

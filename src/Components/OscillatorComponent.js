import React, { Component } from 'react';
import LimitedKnob from './GenericDial';
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
                    <LimitedKnob
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
/*
Project: Tone_Board
Author: Trevor Johnson
File Name: Mixer.js

Mixer.js is contains definition for Mixer component.

Mixer does not currently have any state or take/pass any props
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/Mixer.css';


class Mixer extends Component {

    render() {
        return (
            <div className='mixer'><span style={{fontSize: '3.0rem'}}>Mixer</span></div>
        );
    }
}

export default Mixer;
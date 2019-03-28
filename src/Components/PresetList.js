/*
Project: Tone_Board
Author: Trevor Johnson
File Name: PresetList.js

PresetList.js is contains definition for PresetList component.

PresetList.js does not currently have any state or take/pass any props
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/PresetList.css';


class PresetList extends Component {

    render() {
        return (
            <div id='presetList' className='collection' style={{color: 'black', margin: '0'}}>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
                <a href="#" className='collection-item'>Preset</a>
            </div>
        );
    }

};

export default PresetList;
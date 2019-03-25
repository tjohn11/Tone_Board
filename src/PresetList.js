import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';


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
            </div>
        );
    }

};

export default PresetList;
/*
Project: Tone_Board
Author: Trevor Johnson
File Name: oscillatorTypeSelect.js

oscillatorTypeSelect.js contains component definition for the oscillatorTypeSelect component.

component is a function that renders the select menu to select the oscillator wave type value.
*/

import React from 'react';
import '../styles/Reset.css';
import '../styles/oscillatorTypeSelect.css';


const oscillatorTypeSelect = () => {

    return (
        <div id='oscillatorTypeSelect' className='input-field'>
            <select>
                <option value='sine'>Sine</option>
                <option value='square'>Square</option>
                <option value='saw'>Saw</option>
                <option value='triangle'>Triangle</option>
            </select>
        </div>
    );
};

export default oscillatorTypeSelect;
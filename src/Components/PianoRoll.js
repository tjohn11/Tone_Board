/*
Project: Tone_Board
Author: Trevor Johnson
File Name: pianoRoll.js

pianoRoll.js contains component definition for the pianoRoll component.
pianoRolls sits in between the generator board and the mixer.

*/

import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import '../styles/PianoRoll.css';

//array structure for assigning keyboard shortcuts to notes

const pianoRoll = (props) => {

    const shortcutsExtended = KeyboardShortcuts.BOTTOM_ROW.concat(KeyboardShortcuts.QWERTY_ROW);

    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('c7');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: shortcutsExtended,
    });

    return (
        <div className='pianoContainer'>
            <span className='keyboardTitle'>Keyboard</span>
            <Piano
                noteRange={{ first: firstNote, last: lastNote }}
                playNote={(midiNumber) => {
                    // Play a given note - see notes below
                }}
                stopNote={(midiNumber) => {
                    // Stop playing a given note - see notes below
                }}
                width={1355}
                keyboardShortcuts={keyboardShortcuts}
            />
        </div>
    )
};

export default pianoRoll;
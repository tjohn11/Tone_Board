/*
Project: Tone_Board
Author: Trevor Johnson
File Name: pianoRoll.js

pianoRoll.js contains component definition for the pianoRoll component.
pianoRolls sits in between the generator board and the mixer.

*/

import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import SoundfontProvider from './SoundFontsDemo';
import 'react-piano/dist/styles.css';
import '../styles/PianoRoll.css';


const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


//array structure for assigning keyboard shortcuts to notes
const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('b5');
const shortcutsExtended = KeyboardShortcuts.BOTTOM_ROW.concat(KeyboardShortcuts.QWERTY_ROW);
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: shortcutsExtended,
});

const pianoRoll = (props) => {

    return (
        <div className='pianoContainer'>
            <span className='keyboardTitle'>Keyboard</span>
            {SoundFontDemoTester()}
        </div>
    )
};

function SoundFontDemoTester() {
    return (
        <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
                <Piano
                    noteRange={{first: firstNote, last: lastNote}}
                    width={1215}
                    keyboardShortcuts={keyboardShortcuts}
                    playNote={playNote}
                    stopNote={stopNote}
                    disabled={isLoading}
                />)}
        />
    );

}


export default pianoRoll;
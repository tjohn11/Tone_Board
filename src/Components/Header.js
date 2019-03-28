/*
Project: Tone_Board
Author: Trevor Johnson
File Name: Header.js

Header.js is contains definition for Header component.

Header does not currently have any state or take/pass any props
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/Header.css';


class Header extends Component {
    render() {
        return (
                <div className='nav-wrapper'>
                    <a href="/" id='title' className="brand-logo" style={{color: 'whitesmoke'}}>Tone_Board</a>
                </div>

        );
    }
}

export default Header;
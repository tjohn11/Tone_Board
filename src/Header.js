import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';


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
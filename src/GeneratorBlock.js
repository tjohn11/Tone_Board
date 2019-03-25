import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';


class GeneratorBlock extends Component {

    renderContent() {
        return(
            <div className='generatorBlock'>

            </div>
        );
    }

    render() {
        return (
                <a
                    className='generatorBlock waves-effect btn'
                    onClick={() => {alert("button test");}}>
                    <i className='material-icons'>
                        add
                    </i>
                </a>
        );
    }
}

export default GeneratorBlock;
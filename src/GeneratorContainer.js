import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import GeneratorBlock from './GeneratorBlock';


class GeneratorContainer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='generatorContainer'>
                <div className='row' style={{height: '160px', margin: '0'}}>

                    <div className='col z-depth-2'
                         style={{height: '100%', width: '160px', padding: '.05rem .05rem'}}>
                        <GeneratorBlock/>
                    </div>

                </div>
            </div>
        );
    }

}

export default GeneratorContainer;
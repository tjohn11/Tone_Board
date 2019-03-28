/*
Project: Tone_Board
Author: Trevor Johnson
File Name: GridBlock.js

GridBlock.js contains component definition for a generator grid block component.
GridBlock takes addBlock() as prop from GridContainer. GridBlock calls addBlock() to
add a new block to the grid when the user clicks the initial render button.

Once user clicks add, if GridBlock does not have a type it will show the user the
selector buttons for available block types. Once assigned a type Grid Block will render
the appropriate child component.

GridBlock passes setState functions to gridBlockSelector() as props makeOsc() and makeEnv()
*/


import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/GridBlock.css';
import GridSelector from './gridBlockSelector';
import Oscillator from './OscillatorComponent';


class GridBlock extends Component {

    constructor(props) {
       super(props);
       this.state = {
           clicked: false,
           type: 'none'
       };

        this.makeOsc = this.makeOsc.bind(this);
        this.makeEnv = this.makeEnv.bind(this);
    }

    render() {

        //show add button
        if (this.state.clicked === false) {
            console.log("rendering");
            return (
                <div className='gridBlock'>
                    <a
                        className='addGridBlockBtn waves-effect btn'
                        onClick={() => {
                            this.props.addBlock();
                            this.setState({clicked: true});
                        }}>
                        <i className='large material-icons'>
                            add
                        </i>
                    </a>
                </div>
            );
        }

        else {
            return (
                <div className='gridBlock'>
                    {this.renderContent()}
                </div>
            );
        }
    }


    renderContent() {

        //render grid block by state type
        switch (this.state.type) {

            case 'osc': {
                return (<Oscillator/>);
            }

            case 'env': {
                return;
            }

            //show selector buttons here
            case 'none': {
                return (
                        <GridSelector
                            makeOsc={this.makeOsc}
                            makeEnv={this.makeEnv}
                        />
                );
            }

            //defaults back to add button
            default: {
                return (
                        <a
                            className='addGridBlockBtn waves-effect btn'
                            onClick={() => {
                                this.props.addBlock();
                                this.setState({clicked: true});
                            }}>
                            <i className='large material-icons'>
                                add
                            </i>
                        </a>
                );
            }
        }
    }

    //sets grid block state to render oscillator child
    makeOsc() {
        this.setState({
            type: 'osc'
        });
    }

    //sets grid block state to render envelope child
    makeEnv() {
        this.setState({
            type: 'env'
        });
    }
}


export default GridBlock;
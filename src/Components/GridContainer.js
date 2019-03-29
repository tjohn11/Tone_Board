/*
Project: Tone_Board
Author: Trevor Johnson
File Name: GridContainer.js

GridContainer.js contains component definition for a generator grid block component.
Component holds state value of number of children. Component number of children
dictates how many grid blocks will be rendered inside the component.

GridContainer does not currently take props

GridContainer passes addBlock() to GridBlocks as prop addBlock
*/

import React, { Component } from 'react';
import '../styles/Reset.css';
import '../styles/GridContainer.css';
import GridBlock from './GridBlock';


class GridContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            numChildren: parseInt('1')
        };

        this.addBlock = this.addBlock.bind(this);
    }

    addBlock() {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }

    render() {
    const children = [];

    return (
        <div id='gridContainer'>
            <div className='row' style={{height: '180px', margin: '0'}}>
                {this.renderContent(children)}
            </div>
        </div>
    );
}

renderContent(children) {
    for (let i=0; i<this.state.numChildren; ++i) {
        children.push(this.renderBlock(i));
    }

    return children;
}

renderBlock(i) {
    return (
        <div className='col z-depth-2'
             style={{height: '100%', width: '180px', padding: '.05rem .05rem', margin: '.25rem .25rem'}}
             key={i}
        >
            <GridBlock
                addBlock={this.addBlock}
            />
        </div>
    );
}

}

export default GridContainer;
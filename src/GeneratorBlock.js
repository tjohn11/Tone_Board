import React, { Component } from 'react';

const BlockStyles = {
    backgroundColor: "dark orange",
};

class GeneratorBlock extends Component {

    render() {
        return (
            <div className="ui button active" style={BlockStyles}>
            </div>
        );
    }
}

export default GeneratorBlock;
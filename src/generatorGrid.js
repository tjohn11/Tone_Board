import React from 'react';
import GeneratorBlock from './GeneratorBlock';

const generatorGridStyles = {
    height: "100%",
    width: "auto",
    backgroundColor: "dark gray"
};

const rowStyles = {
    backgroundColor: "yellow"
};

const columnStyles = {
    backgroundColor: "white"
};

const generatorGrid = () => {
    return (
        <div style={generatorGridStyles}>
        </div>
    );
};

export default generatorGrid;
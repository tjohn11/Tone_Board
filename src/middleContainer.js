import React from 'react';
import Presets from './presetList';
import GeneratorGrid from './generatorGrid';

const mContainerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    backgroundColor: "darkblue"
};

const middleContainer = () => {
    return (
        <div style={mContainerStyles}>
            <Presets/>
            <GeneratorGrid/>
        </div>
    );
};

export default middleContainer;
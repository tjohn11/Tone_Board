import React from 'react';

const presetListStyles = {
    backgroundColor: "gray",
    height: "100%",
    width: "35%",
};

const presetList = () => {
    return (
        <div style={presetListStyles}>
            <ul>
                <li>Preset 1</li>
                <li>Preset 2</li>
                <li>Preset 3</li>
            </ul>
        </div>
    );
};

export default presetList;
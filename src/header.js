import React from 'react';

const headerStyle = {
    height: "40%",
    width: "100%",
    backgroundColor: "lightblue"
};

const header = () => {
    return (
        <div style={headerStyle}>
            <h1 style={{margin: "0 0 0 3%"}}>Tone_Board</h1>
        </div>
    );
};

export default header;
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import MiddleContainer from './middleContainer';
import Mixer from './Mixer';


const appStyles = {
    backgroundColor: "teal"
};

const App = () => {
    return (
        <div className="ui" style={appStyles}>
            <Header/>
            <MiddleContainer/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
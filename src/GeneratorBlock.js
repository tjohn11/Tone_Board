import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import GeneratorSelector from './generatorSelector';
import Dial from './GenericDial';


class GeneratorBlock extends Component {

    constructor(props) {
       super(props);
       this.state = {
           clicked: false,
           type: 'none'
       };

        this.makeOsc = this.makeOsc.bind(this);
        this.makeEnv = this.makeEnv.bind(this);
    }


    makeOsc() {
        console.log('making osc');
        this.setState({
            type: 'osc'
        });
    }

    makeEnv() {
        console.log('making env');
        this.setState({
            type: 'env'
        });
    }


    render() {

        //show add button
        if (this.state.clicked === false) {
            console.log("rendering");
            return (
                <div className='generatorBlock'>
                    <a
                        className='addGenBtn waves-effect btn'
                        onClick={() => {
                            console.log(this.state.clicked);
                            this.setState({clicked: true});
                            console.log(this.state.clicked);
                        }}>
                        <i className='large material-icons'>
                            add
                        </i>
                    </a>
                </div>
            );
        }

        else {
            return this.renderContent();
        }
    }


    renderContent() {

        //rendering content
        switch (this.state.type) {

            case 'osc': {
                return (
                    <div className='generatorBlock'>
                        <Dial
                            size={50}
                            numTicks={125}
                            degrees={260}
                            min={1}
                            max={100}
                            value={30}
                            onChange={() => {}}
                        />
                    </div>
                );
            }

            case 'env': {
                return (
                    <div className='generatorBlock' style={{backgroundColor: 'white'}}>

                    </div>
                );
            }

            //show selector buttons here
            case 'none': {
                return (
                    <div className='generatorBlock'>
                        <GeneratorSelector
                            makeOsc={this.makeOsc}
                            makeEnv={this.makeEnv}
                        />
                    </div>
                );
            }

            //defaults back to add button
            default: {
                return (
                    <div className='generatorBlock'>
                        <a
                            className='addGenBtn waves-effect btn'
                            onClick={() => {
                                console.log(this.state.clicked);
                                this.setState({clicked: false});
                                console.log(this.state.clicked);
                            }}>
                            <i className='large material-icons'>
                                add
                            </i>
                        </a>
                    </div>
                );
            }
        }
    }
}


export default GeneratorBlock;
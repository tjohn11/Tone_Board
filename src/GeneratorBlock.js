import React, { Component } from 'react';
import './styles/Reset.css';
import './styles/App.css';


class GeneratorBlock extends Component {

    constructor(props) {
       super(props);
       this.state = {
           clicked: false,
           selected: undefined
       }
    }

    addGenBtn() {
        this.state.clicked = true;
    }



    render() {

        if (this.state.clicked === false) {
            return (
                <div className='generatorBlock'>
                    <a
                        className='addGenBtn waves-effect btn'
                        onClick={() => {
                            alert(this.state.clicked);
                        }}>
                        <i className='large material-icons'>
                            add
                        </i>
                    </a>
                </div>
                );
        }

        else {
            switch (this.state.selected) {

                case 'gen1': {

                }
                case 'gen2': {

                }
                case 'gen3': {

                }

                //show selector buttons here
                default: {
                    return (
                        <a  className='generatorBlock waves-effect btn'
                            onClick={() => {
                                alert(this.state.clicked);
                            }}>
                            <i className='material-icons'>
                                add
                            </i>
                        </a>
                    );
                }
            }
        }
    }
}

export default GeneratorBlock;
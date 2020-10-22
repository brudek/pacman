import React, { Component } from 'react';
import { ReactComponent as PacmanSvg } from './pacman.svg'
import './style.css';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 0,
            left: 0
        }
    }

    render(){
        return(
            <div 
              className="pacman"
              style={this.state.position}
            >
                <PacmanSvg />
            </div>
        );
    }
}

Pacman.defaultProps = {
    size: 20, //Pacman size 20x20px
    step: 20, //20px
    // TODO: move to config
    border: 10 * 2,
    topScoreBoardHeigt: 50
}

export default Pacman;
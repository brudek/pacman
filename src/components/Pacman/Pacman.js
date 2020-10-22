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

    constructor(props){
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount(){
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (e) => {
        console.log(e.keyCode, e.key);
    }

    render(){
        return(
            <div 
              ref={this.pacmanRef}
              className="pacman"
              tabIndex="0"
              style={this.state.position}
              onKeyDown={this.handleKeyDown}
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
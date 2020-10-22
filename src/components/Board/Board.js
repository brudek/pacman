import React, { Component } from 'react';

import Pacman from '../Pacman';
import Ghost from '../Ghost';
import './style.css';

class Board extends Component {

    createGhosts(num){
        let i = 0;
        let ghosts = [];  
        while(i<num){
            i++;
            ghosts.push(<Ghost key={i}/>);
        }
        return ghosts;
    }

    render(){
        const {ghostsNumber} = this.props;
        return (
            <div className="board">
                <Pacman />
                {this.createGhosts(ghostsNumber)}
                {/* <Food /> */}
            </div>
        )
    }
}

Board.defaultProps = {
    ghostsNumber: 5
}

export default Board;
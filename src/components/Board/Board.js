import React, { Component } from 'react';

import Pacman from '../Pacman';
import Ghost from '../Ghost';
import './style.css';

class Board extends Component {

    colors = ['red', 'pink', 'green', 'blue', 'black', 'white', 'purple', 'brown', 'yellow', 'silver', 'gold'];

    createGhosts(num){
        let i = 0;
        let ghosts = [];  
        while(i<num){
            i++;
            const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            const {step, size, border, topScoreBoardHeight} = this.props;
            const minStartDistance = 2*step;
            const randomTop = Math.floor(Math.max(Math.floor(Math.random() * window.innerHeight - border - topScoreBoardHeight - size), minStartDistance)/size)*size;
            const randomLeft = Math.floor(Math.max(Math.floor(Math.random() * window.innerWidth - border - size), minStartDistance)/size)*size;
            const directions = ['up', 'down', 'left', 'right'];
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];

            ghosts.push(<Ghost key={i} color={randomColor} randomDirection={randomDirection} randomTop={randomTop} randomLeft={randomLeft}/>);
        }
        return ghosts;
    }

    render(){
        
        const {ghostsNumber, border, topScoreBoardHeight, size} = this.props;
        const boardHeight = (Math.floor((window.innerHeight - border - topScoreBoardHeight - size) / size))*size;
        
        return (
            <div className="board" style={{height: boardHeight}}>
                <Pacman />
                {this.createGhosts(ghostsNumber)}
                {/* <Food /> */}
            </div>
        )
    }
}

Board.defaultProps = {
    step: 20,
    size: 20,
    border: 10*2,
    topScoreBoardHeight: 50,
    ghostsNumber: 10
}

export default Board;
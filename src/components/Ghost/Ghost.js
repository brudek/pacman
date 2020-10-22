import React, { Component } from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';
import './style.css';


class Ghost extends Component{

    colors = ['red', 'pink', 'green', 'blue', 'black', 'white', 'purple', 'brown', 'yellow', 'silver', 'gold'];
    
    state = {
        direction: 'left',
        position: {
            top: 100,
            left: 100
        }
    }

    changeDirection = () => {
        const directions = ['up', 'down', 'left', 'right'];
        const movement = directions[Math.floor(Math.random() * directions.length)];

        this.setState({ direction: movement }, () => {
            console.log(this.state.direction);
        });
    }
    render(){
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        const {step, size, border, topScoreBoardHeight} = this.props;
        const minStartDistance = 2*step;
        const randomTop = Math.max(Math.floor(Math.random() * window.innerHeight - border - topScoreBoardHeight - size), minStartDistance);
        const randomLeft = Math.max(Math.floor(Math.random() * window.innerWidth - border - size), minStartDistance);
        return(
            <div 
               className="ghost"
               style={{top: randomTop, left: randomLeft}}>
                <GhostSvg style={{'fill': randomColor}}/>
            </div>
        )
    }
}

Ghost.defaultProps = {
    step: 20,
    size: 20,
    border: 10*2,
    topScoreBoardHeight: 50
}

export default Ghost;
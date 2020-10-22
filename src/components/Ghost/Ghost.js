import React, { Component } from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';
import './style.css';


class Ghost extends Component{

    colors = ['red', 'green', 'blue', 'black', 'white', 'brown'];
    
    state = {
        direction: 'left',
        position: {
            top: 100,
            left: 100
        }
    }
    render(){
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const {step, size, border, topScoreBoardHeight} = this.props;
        const minStartDistance = 2*step;
        const randomTop = Math.max(Math.floor(Math.random() * window.innerHeight - border - topScoreBoardHeight - size), minStartDistance);
        const randomLeft = Math.max(Math.floor(Math.random() * window.innerWidth - border - size), minStartDistance);
        return(
            <div 
               className="ghost"
               style={{top: randomTop, left: randomLeft}}>
                <GhostSvg style={{'fill': color}}/>
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
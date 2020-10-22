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

        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
    
        // 39 ArrowRight
        // 40 ArrowDown
        // 37 ArrowLeft
        // 38 ArrowUp

        if(e.key === 'ArrowUp'){
            if(this.state.direction === 'up'){
                this.setState({
                    position:{
                        top: currentTop - 20,
                        left: currentLeft
                    }
                })
            }
            else{
                this.setState({
                    direction: 'up'
                })
            }
           
        }
        else if(e.key === 'ArrowDown'){
            if(this.state.direction === 'down'){
                this.setState({
                    position:{
                        top: currentTop + 20,
                        left: currentLeft
                    }
                }) 
            }
            else{
                this.setState({
                    direction: 'down'
                })
            }
        } 
        else if(e.key === 'ArrowLeft'){
            if(this.state.direction === 'left'){
                this.setState({
                    position: {
                        top: currentTop,
                        left: currentLeft - 20
                    }
                })
            }
            else{
                this.setState({
                    direction: 'left'
                })
            }
        }
        else if(e.key === 'ArrowRight'){
            if(this.state.direction === 'right'){
                this.setState({
                    position: {
                        top: currentTop,
                        left: currentLeft + 20
                    }
                })
            }
            else{
                this.setState({
                    direction: 'right'
                })
            }
        } 
    }

    render(){
        const {direction, position} = this.state;
        return(
            <div 
              ref={this.pacmanRef}
              className={`pacman pacman-${direction}`}
              tabIndex="0"
              style={position}
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
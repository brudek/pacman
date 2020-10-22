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

        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const {step, size, border, topScoreBoardHeight} = this.props;
        const boardHeight = Math.floor((window.innerHeight - border - topScoreBoardHeight - size)/size)*size;
        const boardWidth = Math.floor((window.innerWidth - border - size)/size)*size;
        console.log(boardHeight);
        // 39 ArrowRight
        // 40 ArrowDown
        // 37 ArrowLeft
        // 38 ArrowUp

        if(e.key === 'ArrowUp'){
            if(this.state.direction === 'up'){
                if(currentTop>0){
                    this.setState({
                        position:{
                            top: currentTop - step,
                            left: currentLeft
                        }
                    })
                }
                else{
                    //TODO: play audio auć
                    console.log('Auć!');
                }
            }
            else{
                this.setState({
                    direction: 'up'
                })
            }
        }
        else if(e.key === 'ArrowDown'){
            if(this.state.direction === 'down'){
                if(this.state.position.top < boardHeight - size){
                    this.setState({
                        position:{
                            top: currentTop + step,
                            left: currentLeft
                        }
                    }); 
                }
                else{
                    console.log('Auć!');
                }
            }
            else{
                this.setState({
                    direction: 'down'
                })
            }
        } 
        else if(e.key === 'ArrowLeft'){
            if(this.state.direction === 'left'){
                if(this.state.position.left > 0){
                    this.setState({
                        position: {
                            top: currentTop,
                            left: currentLeft - step
                        }
                    })
                }
                else{
                    console.log('Auć!');
                }
            }
            else{
                this.setState({
                    direction: 'left'
                })
            }
        }
        else if(e.key === 'ArrowRight'){
            if(this.state.direction === 'right'){
                if(this.state.position.left < boardWidth){
                    this.setState({
                        position: {
                            top: currentTop,
                            left: currentLeft + step
                        }
                    })
                }
                else{
                    console.log('Auć!');
                }
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
    border: 10*2,
    topScoreBoardHeight: 50
}

export default Pacman;
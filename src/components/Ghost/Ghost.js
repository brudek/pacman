import React, { Component } from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';
import './style.css';


class Ghost extends Component{
 
    state = {
        direction: this.props.randomDirection,
        position: {
            top: this.props.randomTop,
            left: this.props.randomLeft
        }
    }

    componentDidMount(){
        this.moveInterval = setInterval( () => {
            this.move();
        }, 500); 
    }

    componentWillUnmount(){
        clearInterval(this.moveInterval);
    }

    move = () => {

        //TODO: refactor
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const {direction} = this.state;
        const {step, size, border, topScoreBoardHeight} = this.props;
        //zaokrąglanie do wielokrotności postaci
        const boardHeight = Math.floor((window.innerHeight - border - topScoreBoardHeight - 2*size)/size)*size;
        const boardWidth = Math.floor((window.innerWidth - border - size)/size)*size;
        if(direction === 'up'){
            if(this.state.direction === 'up'){
                if(currentTop > 0){
                    this.setState({
                        position:{
                            top: currentTop - step,
                            left: currentLeft
                        }
                    })
                }
                else{
                    this.changeDirection();
                }
            }
            else{
                this.setState({
                    direction: 'up'
                })
            }
        }
        else if(direction === 'down'){
            if(this.state.direction === 'down'){
                if(this.state.position.top < boardHeight){
                    this.setState({
                        position:{
                            top: currentTop + step,
                            left: currentLeft
                        }
                    }); 
                }
                else{
                    this.changeDirection();
                }
            }
            else{
                this.setState({
                    direction: 'down'
                })
            }
        } 
        else if(direction === 'left'){
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
                    this.changeDirection();
                }
            }
            else{
                this.setState({
                    direction: 'left'
                })
            }
        }
        else if(direction === 'right'){
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
                    this.changeDirection();
                }
            }
            else{
                this.setState({
                    direction: 'right'
                })
            }
        } 
    }

    changeDirection = () => {
        const directions = ['up', 'down', 'left', 'right'];
        const movement = directions[Math.floor(Math.random() * directions.length)];

        this.setState({ direction: movement });   
    }

    render(){
        return(
            <div className="ghost" style={this.state.position}>
                <GhostSvg style={{fill: this.props.color}}/>
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
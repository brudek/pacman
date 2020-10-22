import React, {Component} from 'react';

import './style.css';

class Food extends Component{

    state = {
        position: {
            top: this.props.position.top,
            left: this.props.position.left
        },
        uneaten: true
    }

    render(){
        const {position, uneaten} = this.state;
        return(
            <div style={position} className={uneaten? 'food' : 'food hidden'}>
                <span className="food-dot"></span>
            </div>
        )
    }
}

Food.defaulProps = {
    foodSize: 50,
    position: {
        top: 0,
        left: 0
    }
}

export default Food;
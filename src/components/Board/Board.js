import React, { Component } from 'react';

import Pacman from '../Pacman';
import Ghost from '../Ghost';
import './style.css';

class Board extends Component {

    render(){
        return (
            <div className="board">
                <Pacman />
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
                {/* <Food /> */}
            </div>
        )
    }
}

export default Board;
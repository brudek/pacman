import React from 'react';

function Header({score}){
    return (
        <div>
            <span>Score: {score}</span>
        </div>
    )
}

Header.defaultProps = {
    score: 0
};

export default Header;
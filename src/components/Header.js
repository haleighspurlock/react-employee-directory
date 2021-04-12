import React from 'react';

function Header () {
    return (
        <header className='jumbotron jumbotron-fluid' style={{paddingLeft:20, paddingRight:20}}>
            <h1 className='display-4'>Employee Directory</h1>
            <p className='lead'>Navigate through employees or use the search bar to narrow your results!</p>
        </header>
    )
};

export default Header;
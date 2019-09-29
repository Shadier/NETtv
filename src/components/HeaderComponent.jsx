import React from 'react';
import imgLogo from '../assets/images/LOGO.png';

class HeaderComponent extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="black">
                    <img src={imgLogo} alt="Brand logo" width="300"/>
                    <h4 >NET TV</h4>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
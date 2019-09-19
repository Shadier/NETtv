import React from 'react';
import NavigationComponent from './NavigationComponent';
import CharactersComponent from './CharactersComponent';

class HeaderComponent extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="black">
                    <NavigationComponent />
                    <h4 >welcome to</h4>
                    <h1 className="title">MOVIESAPP</h1>
                    <CharactersComponent />
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
import React from 'react';
import Batman from '../assets/images/batman.png';
import IronMan from '../assets/images/ironman.png';
import Darth from '../assets/images/darth.png';

class HeaderComponent extends React.Component{
    render(){
        return (
            <div className="container-characters">
                <img className="img-header-l" src={Darth} alt="Darth Vader" height="390" />
                <img className="img-header-m" src={IronMan} alt="IronMan" height="380" />
                <img className="img-header-r" src={Batman} alt="Batman" height="460" />
            </div>
        );
    }
}

export default HeaderComponent;
import React from 'react';

class MovieComponent extends React.Component{
    render(){
        return (
            <div id={this.props.id} className="movie">
                <img className="cover" src={this.props.img} alt={this.props.alt} width="120"/>
                <div className="content">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="release">{this.props.release}</p>
                    <span className={`status ${this.props.status.toLowerCase()}`}>{this.props.status}</span>
                    <div className="summary" dangerouslySetInnerHTML={createMarkup(this.props.summary)}></div>
                </div>
                <button className="btn-seemore">SEE MORE</button>
            </div>
        );
    }
}

function createMarkup(str) {
    return {__html: str};
}

export default MovieComponent;
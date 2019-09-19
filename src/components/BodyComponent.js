import React from 'react';
import axios from 'axios';
import MovieComponent from './MovieComponent';

import venomCover from '../assets/images/covers/venom.jpg';
import toystoryCover from '../assets/images/covers/0.jpg';
import dogsCover from '../assets/images/covers/1.jpg';
import kickassCover from '../assets/images/covers/2.jpg';
class BodyComponent extends React.Component{

    state = {
        movies : [],
        status: null
    }

    componentWillMount(){
        this.getMovies();
    }

    getMovies = () =>{
        axios.get("http://api.tvmaze.com/shows?page=5")
             .then( response => {
                this.setState({
                    movies: response.data,
                    status: 'success'
                });
                console.log(this.state);
             });
    }

    render(){
        if(this.state.movies.length >= 1){
            const moviesList = this.state.movies.map(movie => {
                console.log(movie);
                if(movie.image == null)
                    return; 
                return (
                    <MovieComponent img={movie.image.medium} name={movie.name} release={movie.premiered} status={movie.status} genres={movie.genres} summary={movie.summary}/>
                );
            });
            return (
                <div className="body-container">
                    <div>
                        {moviesList}
                    </div>
                </div>
            );
        }else if(this.state.movies.length === 0 && this.state.status === 'success'){
            return (
                <p>No Hay contenido de peliculas</p>
            );
        }else{
            return <p>Cargando</p>
        }
        
    }
}

export default BodyComponent;
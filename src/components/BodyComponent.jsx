import React from 'react';
import axios from 'axios';
import MovieComponent from './MovieComponent';
import LoadingGIF from '../assets/images/loading.gif';

class BodyComponent extends React.Component{

    state = {
        movies : [],
        status: null
    }

    componentWillMount(){
        this.getMovies();
    }

    getMovies = () =>{
        axios.get("http://api.tvmaze.com/shows?page=4")
             .then( response => {
                this.setState({
                    movies: response.data,
                    status: 'success'
                });
             });
    }

    render(){
        if(this.state.movies.length >= 1){
            const moviesList = this.state.movies.map(movie => {
                if(movie.image == null)
                    return ;
                return (
                    <MovieComponent key={movie.id} id={movie.id} img={movie.image.medium} name={movie.name} release={movie.premiered} status={movie.status} genres={movie.genres} summary={movie.summary}/>
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
            return (
                <div className="loading-space">
                    <img src={LoadingGIF} alt="loading animation" />
                    <p>Cargando</p>
                </div>)
        }
        
    }
}

export default BodyComponent;
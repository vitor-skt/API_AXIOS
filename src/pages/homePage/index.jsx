import React from 'react'
import { Container, MovieList, MovieListItem, InputBox, Search, Header } from './styles';
import { useState, useEffect, useRef } from 'react';
import { APIKey } from '../../config/key';
import { Link } from 'react-router-dom';


function HomePage() {

    const [searchTerm, setSearchTerm] = useState('');

    const [moviesArray, setMoviesArray] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`)
            .then(response => response.json())
            .then(data => setMoviesArray(data.results))
    }, []);

    return (
        <>
            <Header>
                <InputBox>
                    <Search />
                    <input className="search" type="text"
                        placeholder="Search for a movie..."
                        onChange={event => {
                            setSearchTerm(event.target.value)
                        }} />
                </InputBox>
            </Header>
            <Container>
                <h1>Movies</h1>
                <MovieList>
                    {moviesArray.filter((val) => {
                        return val.title.toLowerCase().includes(searchTerm.toLowerCase())
                    }).map((movie => {
                        return (
                            <MovieListItem key={movie.id}>

                                <Link to={`/details/${movie.id}`}>
                                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                                </Link>

                                <span>{movie.title}</span>
                            </MovieListItem>
                        )
                    }))}
                </MovieList>
            </Container>
        </>
    )
}

export default HomePage
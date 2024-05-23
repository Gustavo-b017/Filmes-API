import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIkey } from '../../config/key';


function TopRated() {

        const imagePath = 'https://image.tmdb.org/t/p/w500/'

        const [movies, setMovies] = useState([])

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
        }, [])
    return (  
        <div className='Container'>

            <h1>Filmes Recentes</h1>

            <ul className='MovieList'>
                {movies.map(movie => {
                    return (
                        <li className='Movie' key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TopRated;
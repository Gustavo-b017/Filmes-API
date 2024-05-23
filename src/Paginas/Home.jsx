import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { APIKey } from '../config/key';
import { imagePath } from '../config/ImgPath';


function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
            console.log(data.results)
        })
    }, [])

    return (
        <div className='ContainerHome'>

            <h1>Movies</h1>

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

export default Home;

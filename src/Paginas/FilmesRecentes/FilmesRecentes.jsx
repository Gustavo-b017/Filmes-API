import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { APIkey } from '../../config/key';
function FilmesRecentes() {

        const imagePath = 'https://image.tmdb.org/t/p/w500/'

        const [movies, setMovies] = useState([])

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
        }, [])
    return (  
        <div className='p-8 max-w-11xl my-0 mx-auto'>

            <h1 className='pt-4 text-xl bold text-center my-16 mx-0'>Filmes Recentes</h1>

            <ul className='list-none grid gap-y-16 gap-x-12 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'>
                {movies.map(movie => {
                    return (
                        <li className='flex flex-col items-center hover:shadow-2xl hover:rounded-2xl transition duration-300 ' key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img className='w-[230px] rounded-2xl mb-8 ' src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span className='font-bold text-center text-lg'>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    
        

    );
}

export default FilmesRecentes;
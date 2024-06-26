//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIkey } from '../../config/key';
// import './detalhes.css'
function Detalhes() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, release_date, overview } = data
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <div className="px-8">
      <div className="h-screen flex flex-col md:flex-row justify-center items-center">
        <img className="w-[300px] rounded-[1rem] mb-8 md:mb-0 md:mr-8" src={movie.image} alt={movie.sinopse} />

        <div className="flex flex-col items-start md:ml-16 md:max-w-1/2 text-center md:text-left">
          <h1 className="text-2xl my-10 mx-0 dark:text-white">{movie.title}</h1>
          <span className="dark:text-white text-justify">Sinopse: {movie.sinopse}</span>
          <span className="text-base opacity-50 dark:text-white">Release date: {movie.releaseDate}</span>
          <Link to="/">
            <button className="bg-red-500 cursor-pointer rounded-[1rem] text-white py-3 px-8 mt-4 text-base transition-all duration-300">Voltar</button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default Detalhes;

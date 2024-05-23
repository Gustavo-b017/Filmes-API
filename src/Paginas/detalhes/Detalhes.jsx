import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { imagePath } from "../../config/ImgPath";
import './detalhes.css'

function Detalhes() {

    const { id } = useParams();

    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            
            const { title, poster_path, overview, release_date } = data
            console.log(data)

            const movie = {
                id,
                title: title,
                sinopse: overview,
                image: `${imagePath}${poster_path}`,
                lancamento: release_date,
            }

            setMovie(movie);
        })
    }, [id])
    return ( 
        
        <div className='Container'>

            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} /> 

                <div className="detalhes">
                    <h1> {movie.title} </h1>

                    <span> Sinopse: {movie.sinopse} </span>

                    <span className="lancamento"> Data de Lancamento: {movie.lancamento} </span>

                    <Link to='/'> <button> Voltar </button> </Link>
                </div>
            </div>
            
        </div>
     );
}

export default Detalhes;
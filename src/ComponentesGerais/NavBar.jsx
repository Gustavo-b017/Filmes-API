import { Link } from "react-router-dom";
import "../index.css"


function NavBar() {
    return ( 
        <header className="flex justify-center items-center w-screen bg-black fixed z-auto">
            <nav className="font-mono  text-lg py-8 px-0">
                <ul className="flex gap-32 py-0 px-8 text-white">
                    <li>
                        <Link to="/">Filmes Populares</Link>
                    </li>
                    <li>
                        <Link to="FilmesRecentes">Filmes Recentes</Link>
                    </li>
                    <li>
                        <Link to="TopRated">Top Mais bem avaliados</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
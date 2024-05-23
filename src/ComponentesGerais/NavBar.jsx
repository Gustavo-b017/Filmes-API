import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
    return (  
        <nav className="NavBar">
            <ul>
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
    );
}

export default NavBar;
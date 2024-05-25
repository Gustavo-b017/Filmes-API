import { Link } from "react-router-dom";
import "../index.css"
import { useState } from "react";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-center gap-72 items-center w-screen bg-black fixed z-auto md:p-8">

        <div className="w-4/5 flex justify-between">
            <div className="flex items-center">
                <div className="text-white font-mono text-lg">Telediversão</div>
            </div>
                
            <nav className="font-mono text-lg py-8 px-0 lg:hidden"> {/* Alterado de md:hidden para lg:hidden */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    ☰
                </button>
                {isOpen && (
                    <ul className="flex flex-col gap-2 absolute top-full left-0 w-full bg-black p-4">
                        <li>
                            <Link to="/" className="text-white">Filmes Populares</Link>
                        </li>
                        <li>
                            <Link to="FilmesRecentes" className="text-white">Filmes Recentes</Link>
                        </li>
                        <li>
                            <Link to="TopRated" className="text-white">Top Mais bem avaliados</Link>
                        </li>
                    </ul>
                )}
            </nav>
    
            <nav className="hidden lg:flex font-mono text-lg"> {/* Alterado de md:flex para lg:flex */}
                <ul className="flex gap-8 lg:gap-32 text-white">
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
        </div>
    </header>
    
    
    
    );
}

export default NavBar;
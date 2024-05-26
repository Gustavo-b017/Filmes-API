import { Link } from "react-router-dom";
import "../index.css"
import { useState } from "react";


function NavBar() {

  

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-center gap-72 items-center w-screen bg-slate-100  dark:bg-black fixed z-auto xl:p-8">

        <div className="w-4/5 gap-32 flex justify-between">
            <div className="flex items-center gap-6 ml-4">
                <img src="./src/img/video.png" width="40px" alt=""/>
                <p className="text-black text-lg dark:text-white">Telediversão</p>
            </div>
                
            <nav className="font-mono text-lg py-8 px-0 xl:hidden lg:p-8 xl:p-8"> {/* Alterado de md:hidden para lg:hidden */}
                <button onClick={() => setIsOpen(!isOpen)} className=" text-black dark:text-white">
                    ☰
                </button>
                {isOpen && (
                    <ul className="flex flex-col items-center gap-2 absolute top-full left-0 w-full bg-slate-100 dark:bg-black p-4">
                        <li>
                            <Link to="/" className="text-black dark:text-white">Filmes Populares</Link>
                        </li>
                        <li>
                            <Link to="FilmesRecentes" className="text-black dark:text-white">Filmes Recentes</Link>
                        </li>
                        <li>
                            <Link to="TopRated" className="text-black dark:text-white">Top Mais bem avaliados</Link>
                        </li>
                    </ul>
                )}

                
            </nav>

            

    
            <nav className="hidden  xl:flex font-mono text-lg"> {/* Alterado de md:flex para lg:flex */}
                <ul className="flex gap-2 xl-hidden xl:gap-16 text-white">
                    <li>
                        <Link to="/" className="text-black dark:text-white">Filmes Populares</Link>
                    </li>
                    <li>
                        <Link to="FilmesRecentes" className="text-black dark:text-white">Filmes Recentes</Link>
                    </li>
                    <li>
                        <Link to="TopRated" className="text-black dark:text-white">Top Mais bem avaliados</Link>
                    </li>
                </ul>
            </nav>

           
            
        </div>
    </header>
    
    
    
    );
}

export default NavBar;
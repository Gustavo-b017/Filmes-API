import { Outlet } from 'react-router-dom';
import NavBar from './ComponentesGerais/NavBar';
import { useState } from 'react';


function App() {

  const [darkMode, setdarkMode] = useState(false);

  const toggleDarkMode = () => {
      setdarkMode(!darkMode)
  }
 
  return (
    <div className={`${darkMode && "dark"}`}>
      <body className='overflow-x-hidden bg-white dark:bg-neutral-900'>
      <NavBar />
      <Outlet/>
      <button className="fixed bottom-16  right-2 " onClick={toggleDarkMode}>
        <img src="./src/img/sollua.png" alt=""  className=" size-16"/>
        </button>
    </body>
    </div>
    
)}

export default App
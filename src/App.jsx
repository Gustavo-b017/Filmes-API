import { Outlet } from 'react-router-dom';
import NavBar from './ComponentesGerais/NavBar';


function App() {
 
  return (
    <div>
      <NavBar />
      <Outlet/>
    </div>
)}

export default App
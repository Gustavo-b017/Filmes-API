import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Paginas/Home.jsx'
import Detalhes from './Paginas/detalhes/Detalhes.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home/> },
    {path: 'details/:id', element: <Detalhes />}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

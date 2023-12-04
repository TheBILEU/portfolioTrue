import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Inicio from './components/Inicio'
import Projeto from "./components/Projeto"

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
            <Header/>
          <Routes>
              <Route path='/' element={<Inicio />}/>
              <Route path='/projetos' element={<Projeto />}/>
          </Routes>
        </BrowserRouter>

      </div>
          
      
    </>
  )
}

export default App

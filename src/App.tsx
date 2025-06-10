import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './screens/Main'
import Filme from './screens/Filme'


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/filme' element={<Filme/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

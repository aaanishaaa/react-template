import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/Contact' element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

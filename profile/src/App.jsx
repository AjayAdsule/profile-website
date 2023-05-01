import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './componenet/Home'
import About from './componenet/About'
import Contact from './componenet/Contact'
import Footer from './componenet/Footer'
import Navbar from './componenet/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App

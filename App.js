import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Interests from './components/Interests'

function App(){
    return (
        <div className='container'>
            <Contact />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App;
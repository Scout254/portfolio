import React from 'react'
import About from './components/About'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Tech from './components/Tech'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Experience/> */}
      <Tech/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
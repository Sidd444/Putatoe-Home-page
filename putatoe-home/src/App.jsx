import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Mid from './components/Mid'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Services/>
      <Mid/>
      <Footer/>
      <img
       style={{height:"60px",width:"60px",position:"fixed",bottom:"0",right:"0"}}
      src="https://www.putatoe.com/static/media/logo.aa9da4f6375a03f8abbe.png" />
    </>
  )
}

export default App

import { useState } from "react"
import { Routes, Route, Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Info from "./Info"

function App() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/info'>info</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App

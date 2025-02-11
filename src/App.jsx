
import { Routes, Route } from "react-router"
import Home from "./Home"
import About from "./About"
import Info from "./Info"
import Navbar from "./Navbar"
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App

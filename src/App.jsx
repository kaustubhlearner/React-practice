import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import College from "./College";
import Student from './Student'
import Collegedetails from "./Collegedetails";
import Department from './Department'

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Pages</h1>
const Contact = () => <h1>Contact Pages</h1>
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/college" element={<College />}>
          <Route path='student' element={<Student />} />
          <Route path='department' element={< Department />} />
          <Route path='collegedetailes' element={< Collegedetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import images from './Assets/dog.jpg'

function App() {
  return (
    <>
    <h1>kaustubh Todos</h1>
    <img src={images} alt="" style={{height:"200px"}}/>
    <ul>
      <li>invent new traffic light</li>
      <li>Reharse a movie Scene</li>
      <li>Improve the spectrum technolgy</li>
    </ul>
    <button>Click me !</button>
    </>
  )
}

export default App

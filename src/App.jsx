import images from './Assets/dog.jpg'
let name = (name) => {
  alert(name)
}
function App() {
  const name = (name) => {
    alert(name)
  }
  
  return (
    <>
<button onClick={()=>{name('kaustubh')}}>click me </button>
    </>
  )
}

export default App

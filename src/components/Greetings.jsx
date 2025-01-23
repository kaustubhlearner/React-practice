const Greetings = () => {
    let greet = "hello";
    let date = new Date()
  return (
    <div>
        <h1>{greet}</h1>
        <p> Date: {date.getDate()}</p>
    </div>
  )
}

export default Greetings
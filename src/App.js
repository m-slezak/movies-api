import React, {useState, useEffect} from 'react'


function App() {

  const[endPoint, setEndPoint] = useState('');

  const [container, setContainer] = useState([])

  const [finalPoint, setFinalPoint] = useState('')

  const handleEndPoint = (e) => {
    setEndPoint(e.target.value)
  }

  useEffect(() => {
    fetchMe()
  }, [finalPoint])


  const onSubmitHandler = (e) => {
    e.preventDefault()
    setFinalPoint(endPoint)
  }


  const fetchMe = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '63e3f41a06mshb9e034743b6f226p18d952jsn74f3d884ba9f',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then(response => response.json())
      .then(data => setContainer(data.d) )
      .catch(err => console.error(err));

  }


  return (
    <div className="App">

      <form onSubmit={onSubmitHandler}
      className="flex mt-8 items-center justify-center">

        <input
         type="text"
         value={endPoint}
         onChange={handleEndPoint}
         className="min-w-[600px] px-4 h-[40px] text-2xl ring-offset-2  ring-4 outline-none rounded-xl "
           />

        <button
        type="submit"
        className='px-4 py-2 ml-6 bg-orange-100 text-black border-spacing-2 hover:bg-orange-300 rounded-md '
        >Search</button>
      </form>

      <div className='element'>
      {container.map((item, index) => {
        return (

          <div className='element-div' key = {index} >
          <img src={item.i.imageUrl}
          alt=""
           />
          <p className='text-white'> {item.l} </p>
          </div>

      )})}
      </div>

    </div>
  );
}

export default App;

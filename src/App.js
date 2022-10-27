import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const[endPoint, setEndPoint] = useState('');

  const handleEndPoint = (e) => {
    setEndPoint(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  const [container, setContainer] = useState([])

  useEffect(() => {
    fetchMe()
  }, [endPoint])



  const fetchMe = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '63e3f41a06mshb9e034743b6f226p18d952jsn74f3d884ba9f',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
      .then(response => response.json())
      .then(data => setContainer(data.d) )
      .catch(err => console.error(err));

  }


  return (
    <div className="App">

      <form onSubmit={onSubmitHandler}>
        <input type="text" value={endPoint} onChange={handleEndPoint} />
        <button type="submit">Search</button>
      </form>

      {container.map((item) => {
        return (
        <div >
          <img src={item.i.imageUrl} alt="" srcset="" />
          <p> {item.l} </p>
        </div>
      )})}

    </div>
  );
}

export default App;

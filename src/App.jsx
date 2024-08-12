import { useState, useEffect } from 'react'
import Form from './components/Form';
import MovieButton from './components/MovieButton';
import MovieDisplay from './components/MovieDisplay';
import UpdateButton from './components/UpdateButton';

import './App.css'

function App() {
  // create a variable to hold my api key
  // normally, I would put this in my .env and then bring it in as a variable
  const apiKey = "cac123eb";

  // create the state to hold the movie data
  // I am doing it here so that each child can access the same movie data
  // I will pass the movie or the setter as props
  const [movie, setMovie] = useState(null);
  const [updateMovie, setUpdateMovie] = useState(0);

  const getMovie = async (searchTerm) => {
    // get the movie from the third party api
    const baseUrl = 'https://www.omdbapi.com/';
    const url = baseUrl + '?' + 'apikey=' + apiKey + '&' + 't=' + searchTerm;
    console.log(url);

    try {
      // fetch with the url and it gets us the same thing as when I put
      // the url in the address bar
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (err) {
      console.error(err);
    }


  }

  // general form of useEffect
  // useEffect(callback, [dependencyArray])
  // only runs when I first load this component
  // useEffect(callback, [])
  // instead of using the below line of code which causes issues, I can useEffect
  // getMovie('batman');
  useEffect(() => {
    getMovie('batman');
  }, [])

  return (
    <>
  <h1>This is the main App</h1>
  <UpdateButton/>
  <Form />
  <MovieButton />
  <MovieDisplay />
    </>
  )
}

export default App

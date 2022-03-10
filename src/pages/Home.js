import React, { useEffect, useState } from 'react'
import TableMovies from '../components/TableMovies'
import axios from 'axios'

function Home() {

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/list").then((response) => {
      setMoviesList(response.data)
    })
  }, [])

  return (
      <TableMovies moviesList={moviesList} />  
  )
}

export default Home
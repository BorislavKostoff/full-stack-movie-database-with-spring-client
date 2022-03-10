import React from 'react'
import MovieForm from '../components/MovieForm'
import styled from 'styled-components'
import ButtonForm from '../components/ButtonForm'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateMovie() {

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: "",
      director: "",
      distributor: "",
      rating: 0,
      numberOfVotes: 0,
    },
    onSubmit: (values) => {
      axios.post("http://localhost:8080/create", values).then((response) => {  
        alert('Movie added successful!')
        navigate('/')
      })
    },
  })

  return (
    <ContainerForm onSubmit={formik.handleSubmit}>
      <h1>CREATE MOVIE</h1>
      <MovieForm onChange={formik.handleChange} id='title' name='title' label='Title' type='text' />
      <MovieForm onChange={formik.handleChange} id='director' name='director' label='Director' type='text' />
      <MovieForm onChange={formik.handleChange} id='distributor' name='distributor' label='Distributor' type='text' />
      <ButtonForm type='submit' variant='contained' buttonName='Add Movie' />
    </ContainerForm>
  )
}

export default CreateMovie

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
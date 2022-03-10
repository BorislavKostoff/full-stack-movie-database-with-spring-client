import React, { useEffect, useState } from 'react'
import MovieForm from '../components/MovieForm'
import styled from 'styled-components'
import ButtonForm from '../components/ButtonForm'
import { useFormik } from 'formik'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


function EditMovie() {

  let navigate = useNavigate()

  let {id} = useParams()

  const [initialValues, setInitialValues] = useState({
    title: '', 
    director: '', 
    distributor: '', 
    rating: '', 
    numberOfVotes: ''})

  useEffect(() => {
    axios.get(`http://localhost:8080/list/${id}`).then((response) => {
        setInitialValues(response.data)
    })
  }, [])

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values = initialValues
      axios.put(`http://localhost:8080/update/${id}`, values).then((response) => {  
        alert('Movie updated successful!')
        navigate("/")
      })
    },
  })

  return (

    <ContainerForm onSubmit={formik.handleSubmit}>
      <h1>EDIT MOVIE</h1>
      <MovieForm onChange={(e) => setInitialValues({...initialValues, title: e.target.value})} value={initialValues.title} id='title' name='title' label='Title' type='text' />
      <MovieForm onChange={(e) => setInitialValues({...initialValues, director: e.target.value})} value={initialValues.director} id='director' name='director' label='Director' type='text' />
      <MovieForm onChange={(e) => setInitialValues({...initialValues, distributor: e.target.value})} value={initialValues.distributor} id='distributor' name='distributor' label='Distributor' type='text' />
      <MovieForm value={initialValues.rating} id='distributor' name='distributor' label='Rating' type='text' />
      <MovieForm value={initialValues.numberOfVotes} id='numberOfVotes' name='distributor' label='Votes' type='text' />
      <ButtonForm type='submit' variant='contained' buttonName='Submit Changes' />
    </ContainerForm>
  )
}

export default EditMovie

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
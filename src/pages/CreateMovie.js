import React from 'react'
import MovieForm from '../components/MovieForm'
import styled from 'styled-components'
import ButtonForm from '../components/ButtonForm'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router'
import * as yup from 'yup'

const validationSchema = yup.object({
  title: yup
  .string('Enter title of the movie!')
  .required('The Movie title is required!'),
  director: yup
  .string('Enter Director of the movie!')
  .required('Director name is required!'),
  distributor: yup
  .string('Enter the movie distributor company!')
  .required('Distributor is required!')
})

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
    validationSchema: validationSchema,
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
      <MovieForm error={formik.touched.title && Boolean(formik.errors.title)} helperText={formik.touched.title && formik.errors.title} onChange={formik.handleChange} id='title' name='title' label='Title' type='text' />
      <MovieForm error={formik.touched.director && Boolean(formik.errors.director)} helperText={formik.touched.director && formik.errors.director} onChange={formik.handleChange} id='director' name='director' label='Director' type='text' />
      <MovieForm error={formik.touched.distributor && Boolean(formik.errors.distributor)} helperText={formik.touched.distributor && formik.errors.distributor} onChange={formik.handleChange} id='distributor' name='distributor' label='Distributor' type='text' />
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
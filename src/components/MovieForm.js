import React from 'react'
import { TextField } from '@mui/material'

function MovieForm({ label, type, id, onChange, name, value }) {
  return (
    <TextField value={value} onChange={onChange} id={id} name={name} label={label} variant='standard' type={type} />
  )
}

export default MovieForm
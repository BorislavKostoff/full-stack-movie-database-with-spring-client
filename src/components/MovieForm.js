import React from 'react'
import { TextField } from '@mui/material'

function MovieForm({ label, type, id, onChange, name, value, error, helperText }) {
  return (
    <TextField helperText={helperText} error={error} value={value} onChange={onChange} id={id} name={name} label={label} variant='standard' type={type} />
  )
}

export default MovieForm
import React from 'react'
import Button from '@mui/material/Button'

function ButtonForm({ buttonName, type, variant, onClick}) {
  return (
    <Button onClick={onClick} variant={variant} type={type}>{buttonName}</Button>
  )
}

export default ButtonForm
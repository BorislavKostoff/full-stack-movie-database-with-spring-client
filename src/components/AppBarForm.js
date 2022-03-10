import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ButtonForm from './ButtonForm'
import { useNavigate } from 'react-router-dom'

function AppBarForm() {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/create')
    }

    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ cursor: "pointer" }} onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          <ButtonForm variant='contained' type='button' buttonName='Create' onClick={handleClick} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarForm

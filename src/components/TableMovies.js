import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Rating } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ButtonForm from './ButtonForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchForm from './SearchForm'

function Row({ row }) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(row.rating)
    const [votes, setVotes] = useState(row.numberOfVotes)

    let navigate = useNavigate()

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="center">{row.director}</TableCell>
        <TableCell align="center">{row.distributor}</TableCell>
        <TableCell align="center">
          <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
            setVotes(votes + 1)
          }} 
          />
        </TableCell>
        <TableCell align="center">{votes}</TableCell>
        <TableCell align="right">
            <ButtonForm variant='contained' type='button' buttonName='Edit' onClick={() => {navigate('/edit/'+row.id)}} />
        </TableCell>
        <TableCell align="left">
            <ButtonForm variant='contained' type='button' buttonName='Delete' onClick={() => {
              axios.delete("http://localhost:8080/delete/"+row.id).then((response) => {
                navigate("/")
              })
            }} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}> 
            Some info about the movie here ...            
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

function TableMovies({ moviesList }) {

  return (
    <>
    <SearchForm />
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{fontSize: 30}} >Movie Title</TableCell>
            <TableCell align="center" style={{fontSize: 30}} >Director</TableCell>
            <TableCell align="center" style={{fontSize: 30}} >Distributor</TableCell>
            <TableCell align="center" style={{fontSize: 30}} >Raiting</TableCell>
            <TableCell align="center" style={{fontSize: 30}} >Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moviesList.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default TableMovies
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(title: string, source: number, score: number, author: number, date_added: number) {
  return { title, source, score, author, date_added }
}

const rows = [
  createData('Frozen yoghurt', 10, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 10, 9.0, 37, 4.3),
  createData('Eclair', 10, 16.0, 24, 6.0),
  createData('Cupcake', 10, 3.7, 67, 4.3),
  createData('Gingerbread', 10, 16.0, 49, 3.9),
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.date_added}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

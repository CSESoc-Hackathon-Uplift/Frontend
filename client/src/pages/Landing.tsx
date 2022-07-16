import React from 'react'
import { Container, Card, Grid, Box, Typography } from '@mui/material'

const Landing = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', height: '300px' }}>
      <Container sx={{ width: '30%', justifyContent: 'centre' }}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>Uplift</Typography>
      </Container>
      <Container></Container>
    </Container>
  )
}

export default Landing

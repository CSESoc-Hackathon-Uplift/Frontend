import React from 'react'
import { Container, Card, Grid } from '@mui/material'

const Landing = () => {
  return (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          landing page
        </Grid>
      </Grid>
    </Container>
  )
}

export default Landing

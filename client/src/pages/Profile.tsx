import React from 'react'

import { Grid, Container, Typography } from '@mui/material'

const Profile = () => {
  return (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          profile page
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile

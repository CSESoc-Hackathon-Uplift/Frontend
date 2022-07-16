import React from 'react'

import { Box, Grid, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import profile from '../assets/profile_pic.jpg'
import { styled } from '@mui/material/styles'

const Profile = () => {
  return (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia>
                <LazyLoadImage src={profile} alt={'profile pic'} height="200px" width="200px" effect={'opacity'} style={{ borderRadius: '15px', aspectRatio: '394/267', objectFit: 'cover' }} />
              </CardMedia>
              <Typography variant="h5">Username</Typography>
              <Box></Box>
            </Box>
            <LinearProgress />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile

import React from 'react'

import cat1 from '../assets/download.jpg'

import Table from '../components/Table'
import { Button, Card, Box, Grid, CardMedia, Container, Paper, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import profile from '../assets/profile_pic.jpg'
import ProgressBar from '../components/ProgressBar'
import { flexbox } from '@mui/system'

const Profile = () => {
  let testData = { bgcolor: '#B38ccb', completed: 60 }

  return (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ paddingBottom: '50px' }}>
            <strong>Your Profile</strong>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '150px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia>
                <LazyLoadImage src={profile} alt={'profile pic'} height="200px" width="200px" effect={'opacity'} style={{ borderRadius: '50%', aspectRatio: '394/267', objectFit: 'cover' }} />
              </CardMedia>
              <Typography variant="h5">
                <strong>Username</strong>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <Typography variant="h5">
                <strong>Your Overall Sentiment Analysis:</strong>
              </Typography>
              <ProgressBar key={'something'} bgcolor={testData.bgcolor} completed={testData.completed} />
              <Typography variant="h5">
                <strong>Your Top Categories:</strong>
              </Typography>
              <Box>
                <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                  (news source)
                </Button>
                <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                  (news source)
                </Button>
                <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                  (news source)
                </Button>
              </Box>
              <Typography variant="h5">
                <strong>Your History:</strong>
              </Typography>
              <Table />
              <Typography variant="h5">
                <strong>Your Statistics:</strong>
              </Typography>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '0px',
                  boxShadow: 0,
                  height: '450px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '0px',
                }}
              >
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: '30px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '15px',
                      padding: 3,
                      boxShadow: 3,
                      background: 'unset',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h3">Number</Typography>
                    <p>Average Score</p>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '15px',
                      padding: 3,
                      boxShadow: 3,
                      background: 'unset',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h3">Number</Typography>
                    <p>Bias Ratio</p>
                  </Box>
                </Box>
                <br></br>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '15px',
                      padding: 3,
                      boxShadow: 3,
                      background: 'unset',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h3">Number</Typography>
                    <p>Most Common Author</p>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '15px',
                      padding: 3,
                      boxShadow: 3,
                      background: 'unset',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h3">Number</Typography>
                    <p>Most Common Source</p>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile

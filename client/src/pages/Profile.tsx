import React, { useState, useEffect } from 'react'

import cat1 from '../assets/download.jpg'

import Table from '../components/Table'
import { Button, Card, Box, Grid, CardMedia, Container, Paper, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProgressBar from '../components/ProgressBar'
import { flexbox } from '@mui/system'
import './cardAnimation.css'
import profile from '../assets/happy_woman.jpeg'
import badge1 from '../assets/badge1.png'
import badge2 from '../assets/badge2.png'
import happy_face from '../assets/happy_face.png'
import sad_face from '../assets/sad_face.png'

const Profile = () => {
  let testData = { bgcolor: '#B38ccb', completed: 60 }

  const [finishedLoading, setFinishedLoading] = useState(false)
  const [table, setTable] = useState([])
  const [finishedStats, setFinishedStats] = useState(false)
  const [stats, setStats] = useState({})

  useEffect(() => {
    getHistory()
    getStats()
  }, [])

  useEffect(() => {
    console.log(stats)
  }, [stats])

  const getStats = () => {
    let isMounted = true
    setFinishedStats(false)
    fetch('http://127.0.0.1:8080/stats?uuid=uuid1')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setStats(data)
          setFinishedStats(true)
        }
      })
    return () => {
      isMounted = false
    }
  }

  const getHistory = () => {
    let isMounted = true
    setFinishedLoading(false)
    fetch('http://127.0.0.1:8080/history?uuid=uuid1')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setTable(data.history)
          setFinishedLoading(true)
        }
      })
    return () => {
      isMounted = false
    }
  }

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
              <Typography variant="h5" sx={{ paddingTop: '20px' }}>
                <strong>Adrianne Jones</strong>
              </Typography>
              <Container sx={{ display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
                <LazyLoadImage src={badge1} width="70px" height="70px" />
                <LazyLoadImage src={badge2} width="70px" height="70px" />
              </Container>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
              <Card sx={{ padding: '40px', borderRadius: '15px' }}>
                <Typography variant="h6">
                  <strong>Your Overall Sentiment Analysis:</strong>
                </Typography>
                <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                  <LazyLoadImage src={sad_face} width="25px" height="25px" />
                  <ProgressBar key={'something'} bgcolor={testData.bgcolor} completed={testData.completed} />
                  <LazyLoadImage src={happy_face} width="25px" height="25px" />
                </Container>
              </Card>
              <Card sx={{ padding: '40px', borderRadius: '15px' }}>
                <Typography variant="h6">
                  <strong>Your Top Categories:</strong>
                </Typography>
                <Box sx={{ paddingTop: '15px' }}>
                  <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                    Business & Finance
                  </Button>
                  <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                    Science
                  </Button>
                  <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                    Health & Medicine
                  </Button>
                </Box>
              </Card>
              <Typography variant="h6">
                <strong>Your History:</strong>
              </Typography>
              {finishedLoading && <Table tables={table} />}
              {!finishedLoading && <img src="https://i.stack.imgur.com/ATB3o.gif" alt={'loading'} />}
              <Typography variant="h6">
                <strong>Your Statistics:</strong>
              </Typography>
              {finishedStats && (
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
                    <Card
                      className="newsCard"
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
                      <Typography variant="h3">{stats['avg_score']}</Typography>
                      <p>Average Score</p>
                    </Card>
                    <Card
                      className="newsCard"
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
                      <Typography variant="h3">{stats['bias_ratio']}</Typography>
                      <p>Bias Ratio</p>
                    </Card>
                  </Box>
                  <br></br>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '30px',
                    }}
                  >
                    <Card
                      className="newsCard"
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
                      <Typography variant="h5">{stats['most_common_author']}</Typography>
                      <p>Most Common Author</p>
                    </Card>
                    <Card
                      className="newsCard"
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
                      <Typography variant="h5">{stats['most_common_source']}</Typography>
                      <p>Most Common Source</p>
                    </Card>
                  </Box>
                </Card>
              )}
              {!finishedStats && <img width="100px" src="https://i.stack.imgur.com/ATB3o.gif" alt={'loading'} />}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile

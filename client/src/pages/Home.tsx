import { useContext, useState } from 'react'

import { Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Typography } from '@mui/material'
import { StarRounded } from '@mui/icons-material'

import stays from '../assets/stays.json'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const Home = () => {
  const [location, setLocation] = useState<null | String>(null)
  const [guests, setGuests] = useState<number>(0)

  const filteredStays = stays.filter((stay) => (location === null || stay.city + ', ' + stay.country === location) && stay.maxGuests >= guests)

  const newsList = (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              {'News on (topic)'}
            </Typography>
          </Box>
        </Grid>
        {filteredStays.map((stay) => {
          return (
            <Grid item xs={12} sm={12} lg={12}>
              <Card sx={{ border: 0, boxShadow: 0, background: 'unset', height: '100%' }}>
                <CardMedia>
                  <LazyLoadImage src={stay.photo} alt={stay.title} width="100%" effect={'opacity'} style={{ borderRadius: '16px', aspectRatio: '394/267', objectFit: 'cover' }} />
                </CardMedia>
                <CardContent sx={{ padding: 0, paddingTop: '0.5em' }}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                      <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                        (news source)
                      </Button>
                    </Box>
                    <Stack direction="row" alignItems="center" gap={0.5}>
                      <StarRounded color="secondary" />
                      <Typography variant="body2" component="span">
                        {stay.rating}
                      </Typography>
                    </Stack>
                  </Box>

                  <Typography gutterBottom variant="h6" component="p">
                    (news title)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )

  return <div>{newsList}</div>
}

export default Home

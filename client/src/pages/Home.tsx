import { useContext, useState } from 'react'

import { Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Typography } from '@mui/material'
import { StarRounded } from '@mui/icons-material'

import stays from '../assets/stays.json'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ThemeContext } from '@emotion/react'
import line1 from '../assets/Line1.png'

const Home = (clickCount, setClickCount) => {
  const [location, setLocation] = useState<null | String>(null)
  const [guests, setGuests] = useState<number>(0)

  const filteredStays = stays.filter((stay) => (location === null || stay.city + ', ' + stay.country === location) && stay.maxGuests >= guests)

  const newsList = (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              Newsfeed
            </Typography>
          </Box>
        </Grid>
        {filteredStays.map((stay) => {
          return (
            <Grid item xs={12} sm={12} lg={12}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '30px',
                  borderRadius: '15px',
                  padding: 3,
                  boxShadow: 10,
                  background: 'unset',
                  height: '100%',
                  justifyContents: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <CardMedia>
                  <LazyLoadImage src={stay.photo} alt={stay.title} height="450px" width="500x" effect={'opacity'} style={{ borderRadius: '15px', aspectRatio: '394/267', objectFit: 'cover' }} />
                </CardMedia>
                <CardContent sx={{ padding: 0, display: 'flex', gap: '14px', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography gutterBottom variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Box display={'flex'} flexDirection={'row'}>
                    <Button variant="outlined" size={'small'} sx={{ fontSize: '0.7em', borderRadius: '20px', lineHeight: 1.3, textTransform: 'uppercase', fontWeight: 'bold', marginRight: '1em' }}>
                      (news source)
                    </Button>
                    <Typography>(author's name)</Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" gap={0.5}>
                    <StarRounded color="secondary" />
                    <Typography variant="body2" component="span">
                      {stay.rating}
                    </Typography>
                  </Stack>
                  <Typography>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </Typography>
                  <Button
                    variant="outlined"
                    size={'large'}
                    href=""
                    sx={{
                      fontSize: '0.7em',
                      height: '40px',
                      marginTop: '10px',
                      borderRadius: '35px',
                      lineHeight: 1.3,
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      marginRight: '1em',
                    }}
                  >
                    Read more
                  </Button>
                  <Box display={'flex'} flexDirection={'row'}>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '10px' }}>Categories:</Typography>
                  </Box>
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

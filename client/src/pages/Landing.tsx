import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import landing_graphics from '../assets/landing_graphics.png'
import search from '../assets/search.png'
import power from '../assets/power.png'
import reading from '../assets/reading.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CustomColorTitle = withStyles({
  root: {
    fontSize: '100px',
    fontWeight: 'bold',
    background: '-webkit-linear-gradient(45deg, #d17991 30%, #6d84bf 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})(Typography)

const CustomColorSubtitle = withStyles({
  root: {
    fontSize: '35px',
    marginTop: '60px',
    fontWeight: 'bold',
    background: '-webkit-linear-gradient(122deg, #d17991 30%, #6d84bf 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})(Typography)

const Landing = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px 0px 50px 0px' }}>
      <Container sx={{ display: 'flex', flexDirection: 'row', height: '610px' }}>
        <Container sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <CustomColorTitle>Uplift</CustomColorTitle>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Simple and reliable news provider. Built with a sentiment analysis algorithm to enhance the overall mental wellbeing of users.
          </Typography>
          <Button
            variant="outlined"
            size={'large'}
            href="/home"
            sx={{
              fontSize: '1rem',
              height: '40px',
              width: '70%',
              marginTop: '10px',
              borderRadius: '35px',
              lineHeight: 1.3,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              marginRight: '1em',
            }}
          >
            Start reading
          </Button>
        </Container>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LazyLoadImage src={landing_graphics} width="500px" height="500px" />
        </Container>
      </Container>
      <CustomColorSubtitle>Why Uplift?</CustomColorSubtitle>
      <Container
        sx={{
          height: '300px',
          width: '100%',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <LazyLoadImage src={power} width="100px" height="100px" />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', alignContent: 'center' }}>
            Autonomy over mental wellbeing
          </Typography>
          <Typography variant="body1" sx={{ alignContent: 'center' }}>
            Uplift provides you with a sentiment analysis on the news articles you read, preventing negative biases.
          </Typography>
        </Container>
        <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <LazyLoadImage src={search} width="100px" height="100px" />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', alignContent: 'center' }}>
            Relevant and reliable news
          </Typography>
          <Typography variant="body1" sx={{ alignContent: 'center' }}>
            Uplift only provide you with reliable and reputable news sources. Here, you make your own informed decision.
          </Typography>
        </Container>
        <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <LazyLoadImage src={reading} width="100px" height="100px" />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', alignContent: 'center' }}>
            Read more, stay informed
          </Typography>
          <Typography variant="body1" sx={{ alignContent: 'center' }}>
            At Uplift, we encourage you to read more to develop an open and critical mind, and to be an informed citizen.
          </Typography>
        </Container>
      </Container>
    </Container>
  )
}

export default Landing

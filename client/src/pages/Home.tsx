import { useContext, useState } from 'react'

import { ThemeContext } from '../features/ThemeContext'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import { Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Typography } from '@mui/material'
import { StarRounded } from '@mui/icons-material'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const light = createTheme({
    palette: {
      mode: 'light',

      primary: {
        main: '#000',
      },
      secondary: {
        main: '#EB5757',
      },
    },
  }),
  dark = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#1D1F20',
      },
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#EB5757',
      },
    },
  })

const Home = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const newsList = (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              {'Hot news'}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline enableColorScheme />
      <Header />
      {newsList}
      <Footer />
    </ThemeProvider>
  )
}

export default Home

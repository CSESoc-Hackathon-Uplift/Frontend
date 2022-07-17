import { useContext, useState } from 'react'

import { alpha, AppBar, Autocomplete, Box, Button, Container, Drawer, Grid, IconButton, Paper, Popper, Stack, TextField, Toolbar, Typography, Link } from '@mui/material'
import { DarkMode, LightMode, Search, LocationOn, Add, Remove } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { ThemeContext } from '../features/ThemeContext'
import { withStyles } from '@mui/styles'

import hexRgb from 'hex-rgb'

import stays from '.././assets/stays.json'
import PopupState, { bindPopper, bindFocus } from 'material-ui-popup-state'

const Header = () => {
  // Theme
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' })
    } else {
      theme.dispatch({ type: 'DARKMODE' })
    }
  }

  const muiTheme = useTheme()

  const appBar = (
    <AppBar color="transparent" position="sticky" sx={{ height: 'auto', padding: '1em 0', backgroundColor: alpha(muiTheme.palette.background.paper, 0.7), backdropFilter: 'blur(20px)', boxShadow: 0 }}>
      <Container sx={{ height: '100%' }} maxWidth="lg">
        <Toolbar disableGutters sx={{ height: '100%', flexWrap: 'wrap' }}>
          <Link href="/" underline="none">
            <WbSunnyIcon sx={{ mt: 0.6 }} />
          </Link>
          <Link href="/" underline="none">
            <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'bold', m: 0.75 }}>Uplift</Box>
          </Link>
          <Box sx={{ flexGrow: 1, mx: 2 }} />
          <IconButton
            onClick={onClick}
            color="inherit"
            sx={{
              marginRight: '0.5em',
              [muiTheme.breakpoints.down('md')]: {
                margin: 0,
              },
            }}
          >
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton
            href="/profile"
            color="inherit"
            sx={{
              marginRight: '0.5em',
              [muiTheme.breakpoints.down('md')]: {
                margin: 0,
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )

  return <>{appBar}</>
}

export default Header

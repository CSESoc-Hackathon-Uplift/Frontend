import { useContext, useState } from 'react'

import { ThemeContext } from './features/ThemeContext'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Landing from './pages/Landing'
import Header from './layout/Header'
import Footer from './layout/Footer'

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

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline enableColorScheme />
      <Header />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App

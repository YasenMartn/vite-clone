import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { useTheme } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: "#10b981",
      ...(mode === 'dark' && {
        main: "#e11d48",
        contrastText: "#fff"
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: "#1e293b",
        paper: "#334155",
      },
    }),
    text: {
      ...(mode === 'light' ? {} : 
      {
        primary: '#fff',
        secondary: grey[500],
      }),
    },
  },
});



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#10b981"
    }
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#10b981"
    }
  },
});

const App = () => {

  const themee = useSelector(state => state.app.theme)
  const theme = useTheme();
  const darkModeTheme = createTheme(getDesignTokens(themee === "dark" ? 'dark' : "light"));

  return (
    <ThemeProvider 
      // theme={themee === "dark" ? darkTheme : lightTheme}
      theme={darkModeTheme}
    >
      <CssBaseline />        
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
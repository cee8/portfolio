import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Homepage } from './pages/Homepage'
import { Profile } from './pages/Profile'

const useStyles = makeStyles(
  theme => ({
    button: {
      backgroundColor: 'green',
    },
  }),
  { name: 'App' }
)

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button className={classes.button} variant="contained" color="primary">
          Primary
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App

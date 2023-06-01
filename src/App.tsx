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
    </div>
  )
}

export default App

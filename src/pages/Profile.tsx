import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    button: {
      backgroundColor: 'green',
    },
  }),
  { name: 'Profile' }
)

export const Profile = () => {
  const classes = useStyles()
  return <div className="Profile">PROFILE</div>
}

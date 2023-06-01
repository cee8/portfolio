import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    button: {
      backgroundColor: 'green',
    },
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()
  return <div className="Homepage">HOMEPAGE</div>
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightgreen',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },

    header: {
      backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    avatar: {},

    title: {},

    divider: {},

    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    projectOne: {
      backgroundColor: 'rgb(242, 140, 40)',
    },

    projectTwo: {
      backgroundColor: 'rgb(255, 172, 28)',
    },

    projectThree: {
      backgroundColor: 'rgb(255, 112, 28)',
    },
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.avatar}>AVATAR</div>
        <div className={classes.title}>Chris' Portfolio</div>
      </div>
      <div className={classes.divider}>__________</div>
      <div className={classes.content}>
        <div className={classes.projectOne}>A</div>
        <div className={classes.projectTwo}>B</div>
        <div className={classes.projectThree}>C</div>
      </div>
    </div>
  )
}

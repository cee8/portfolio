import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
// import Chip from '@mui/material/Chip'
import Button from '@material-ui/core/Button'
// import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightgray',
      display: 'grid',
      gridTemplateAreas: `
      'header header'
      'leftpan rightpan'
      'bottomleftpan rightpan'
      `,
      height: '100vh',
      width: '100vw',
    },

    header: {
      // height: '10vh',
      gridArea: 'header',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '3rem',
      flexDirection: 'row',
    },

    avatarContainer: {},

    rounded: {},

    // chrisAvatar:

    title: {
      fontSize: theme.typography.h4.fontSize,
    },

    directory: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '10px',
    },

    directoryHome: {
      paddingInline: '10px',
    },

    directoryWorks: {
      paddingInline: '10px',
    },

    directoryProjects: {
      paddingInline: '10px',
    },

    directoryServices: {
      paddingInline: '10px',
    },

    chatBox: {},

    introBox: {},

    introChip: {},

    introText: {},

    subText: {},

    hireMe: {},

    projects: {},

    clients: {},

    FinishedProjects: {},

    contact: {},

    divider: {},

    content: {
      gridArea: 'rightpan',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    cardContentAbove: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    project: {
      height: '80%',
      backgroundColor: 'white',
      minHeight: theme.spacing(20),
      margin: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },

    // projectTwo: {
    //   backgroundColor: 'rgb(255, 172, 28)',
    //   minHeight: theme.spacing(20),
    //   margin: theme.spacing(3),
    //   display: 'flex',
    //   justifyContent: 'space-around',
    // },

    // projectThree: {
    //   backgroundColor: 'rgb(255, 112, 28)',
    //   minHeight: theme.spacing(20),
    //   margin: theme.spacing(3),
    //   display: 'flex',
    //   justifyContent: 'space-around',
    // },

    contentImage: {},

    contentDescription: {},
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.avatarContainer}>
          {/* <Avatar className={classes.chrisAvatar}>CB</Avatar> */}
        </div>
        <div className={classes.title}>Chris' Portfolio</div>
        <div className={classes.directory}>
          <div className={classes.directoryHome}>directoryHome</div>
          <div className={classes.directoryWorks}>directoryWorks</div>
          <div className={classes.directoryProjects}>directoryProjects</div>
          <div className={classes.directoryServices}>directoryServices</div>
        </div>
        <div className={classes.chatBox}>CHAT</div>
      </div>
      <div className={classes.introBox}>
        {/* <Chip className={classes.introChip} label="Chip Filled" /> */}
        <h1 className={classes.introText}>Hi! I am Chris Beaudoin</h1>
        <h4 className={classes.subText}>This is subtext this ix subtext this is subtextds</h4>
        <Button className={classes.hireMe} variant="contained">
          Hire me
        </Button>
        <Button className={classes.projects}>Projects</Button>
        <h2 className={classes.clients}>clients</h2>
        <h2 className={classes.FinishedProjects}>FinishedProjects</h2>
        <h2 className={classes.contact}>contact</h2>
      </div>
      {/* <hr /> */}
      {/* <Divider /> */}
      <div className={classes.content}>
        <Paper elevation={3} className={classes.project}>
          <div className={classes.cardContentAbove}>
            {/* <div className={classes.contentImage}>IMAGE</div> */}
            <Avatar variant="rounded" className={classes.rounded}>
              {/* <AssignmentIcon /> */}
            </Avatar>
            <div className={classes.contentDescription}>Desc</div>
          </div>
          <Divider />
          <h3>Descriptionnnnnnnnnnnnnnnnn</h3>
        </Paper>
        <Paper elevation={3} className={classes.project}>
          <div className={classes.cardContentAbove}>
            {/* <div className={classes.contentImage}>IMAGE</div> */}
            <Avatar variant="rounded" className={classes.rounded}>
              {/* <AssignmentIcon /> */}
            </Avatar>
            <div className={classes.contentDescription}>Desc</div>
          </div>
          <Divider />
          <h3> Descriptionnnnnnnnnnnnnnnnn</h3>
        </Paper>
        <Paper elevation={3} className={classes.project}>
          <div className={classes.cardContentAbove}>
            {/* <div className={classes.contentImage}>IMAGE</div> */}
            <Avatar variant="rounded" className={classes.rounded}>
              {/* <AssignmentIcon /> */}
            </Avatar>
            <div className={classes.contentDescription}>Desc</div>
          </div>
          <Divider />
          <h3>Descriptionnnnnnnnnnnnnnnnn</h3>
        </Paper>
      </div>
    </div>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import { initializeApp } from 'firebase/app'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightgray',
      display: 'grid',
      gridTemplateAreas: `
      'header header'
      'leftpan rightpan'
      'bottomleftpan rightpan'
      'footer footer'
      `,
      gridTemplateColumns: 'auto 700px',
      gridTemplateRows: '8% 1fr 23%',
      width: 'auto',
      minHeight: '100vh',
    },
    header: {
      gridArea: 'header',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '3rem',
      flexDirection: 'row',
    },
    smallText: {
      fontFamily: 'Trebuchet MS',
      fontSize: '23px',
      fontWeight: 'normal',
    },
    mediumHighText: {
      fontFamily: 'Trebuchet MS',
      fontSize: '30px',
      fontWeight: 'bold',
      paddingTop: '30px',
    },
    avatarContainer: {},
    rounded: {},
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
    topIntroLine: {
      display: 'flex',
      justifyContent: 'start',
      height: 'auto',
      alignItems: 'center',
      fontFamily: 'Gill Sans (sans-serif)',
      fontSize: 'xx-large',
      letterSpacing: '0.1px',
      whiteSpace: 'nowrap',
    },
    introBox: {
      paddingInline: '15%',
    },
    largeChip: {
      border: 'solid',
      borderRadius: '50px',
      height: '50px',
      width: '135px',
      fontFamily: 'Trebuchet MS',
      fontSize: '40px',
      fontWeight: 'bold',
      backgroundColor: 'purple',
      borderColor: 'purple',
      color: 'white',
    },
    introText: {
      paddingRight: '20px',
    },
    nameIntroLine: {
      fontFamily: 'Gill Sans (sans-serif)',
      fontSize: 'xx-large',
    },
    largeTextTop: {
      width: '400px',
      marginTop: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '70px',
      fontWeight: 'bold',
      fontFamily: 'Gill Sans (sans-serif)',
      maxHeight: '100px',
    },
    largeText: {
      display: 'flex',
      fontSize: '70px',
      fontWeight: 'bold',
      fontFamily: 'Gill Sans (sans-serif)',
    },
    subText: {
      display: 'flex',
      fontFamily: 'Trebuchet MS',
      fontSize: '23px',
      fontWeight: 'normal',
      paddingBlock: '50px',
    },
    introBottomComponents: {
      display: 'grid',
      gridTemplateAreas: `
        'hireprojects hireprojects logo    logo'
        'clients      clients      logo    logo'
        'finprojects  contact      contact contact'`,
      gridTemplateColumns: 'auto auto auto auto',
      gridTemplateRows: 'auto auto auto',
      justifyItems: 'left',
      alignItems: 'center',
    },
    hireAndProjectsButtons: {
      gridArea: 'hireprojects',
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '350px',
      minWidth: '325px',
    },
    hireMe: {
      gridArea: 'hire',
      backgroundColor: 'orange',
      width: '150px',
      height: '55px',
      paddingRight: '20px',
    },
    projects: {
      gridArea: 'projects',
      width: '150px',
      height: '55px',
    },
    mainLogo: {
      gridArea: 'logo',
      width: 'auto',
      maxHeight: '100px',
    },
    clients: {
      gridArea: 'clients',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'start',
    },
    finishedProjects: {
      gridArea: 'finprojects',
      display: 'flex',
      flexDirection: 'column',
    },
    finProjNum: {},
    contact: {
      gridArea: 'contact',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
    },
    contactHead: {},
    contactInfo: {},
    divider: {},
    footer: {
      backgroundColor: '#212427',
    },
    projStatA: {},
    projStatB: {},
    projStatC: {},
    content: {
      gridArea: 'rightpan',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 0,
      overflow: 'hidden',
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
    leafPhoto: {
      gridArea: 'logo',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    contentDescription: {},
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()

  const firebaseConfig = {
    apiKey: 'AIzaSyBzDaI4n4GzETmNOk6Idxp7zZLIC5ero_Y',
    authDomain: 'portfolio-num1.firebaseapp.com',
    projectId: 'portfolio-num1',
    storageBucket: 'portfolio-num1.appspot.com',
    messagingSenderId: '880920820026',
    appId: '1:880920820026:web:0a7474bf39f5913bd27803',
  }

  initializeApp(firebaseConfig)

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
        <div className={classes.topIntroLine}>
          <div className={classes.largeTextTop}>
            Hi! I am
            <div className={classes.largeChip}>UI/UX</div>
          </div>
        </div>
        <div className={classes.nameIntroLine}>
          <div className={classes.largeText}>Chris Beaudoin</div>
        </div>
        <h3 className={classes.subText}>
          Designing user interfaces for over 90 years as a product designer
        </h3>
        <div className={classes.introBottomComponents}>
          <div className={classes.hireAndProjectsButtons}>
            <Button className={classes.hireMe} variant="contained">
              Hire me
            </Button>
            <Button className={classes.projects}>Projects</Button>
          </div>
          <img
            className={classes.mainLogo}
            src="https://www.nicepng.com/png/full/839-8393628_purple-leaf.png"
            alt="leaf Photo"
          />
          <div className={classes.clients}>
            <div className={classes.mediumHighText}>+84</div>
            <div className={classes.smallText}>Clients on work worldwide</div>
          </div>
          <div className={classes.finishedProjects}>
            <div className={classes.mediumHighText}>572</div>
            <div className={classes.smallText}>Projects Done</div>
          </div>
          <div className={classes.contact}>
            <div className={classes.mediumHighText}>Contact</div>
            <div className={classes.smallText}>chrisbeaudoin.school@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.projStatA}>A</div>
        <div className={classes.projStatB}>
          B<div className={classes.projStatC}>C</div>
        </div>
      </div>
      <div className={classes.content}>
        <img
          className={classes.leafPhoto}
          src="https://e0.pxfuel.com/wallpapers/975/533/desktop-wallpaper-paper-walls-neon-plants-iphone-phone-galaxy-cool-neon-phone-thumbnail.jpg"
          alt="leaf Photo"
        />
      </div>
    </div>
  )
}

export default Homepage

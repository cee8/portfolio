import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
/* UNUSED IMPORTS */
// import Avatar from '@material-ui/core/Avatar'
// import Paper from '@material-ui/core/Paper'
// import Divider from '@material-ui/core/Divider'
// import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(
  theme => ({
    /* TEXT USED IN CENTER DESCRIPTION */
    subText: {
      display: 'flex',
      fontFamily: 'Trebuchet MS',
      fontSize: '23px',
      fontWeight: 'normal',
      paddingBlock: '50px',
    },

    /* SMALLEST TEXT VIABLE FOR WEBSITE */
    smallText: {
      fontFamily: 'Trebuchet MS',
      fontSize: '23px',
      fontWeight: 'normal',
      textAlign: 'left',
    },

    /* BIG TEXT, (GOOD FOR 2ndry TITLES) */
    mediumHighText: {
      fontFamily: 'Trebuchet MS',
      fontSize: '38px',
      fontWeight: 'bold',
      paddingTop: '30px',
      justifySelf: 'start',
      textAlign: 'left',
    },

    /* BIGGEST TEXT, (USED IN INTRO BOTTOM) */
    largeText: {
      display: 'flex',
      fontSize: '80px',
      fontWeight: 'bold',
      fontFamily: 'Gill Sans (sans-serif)',
      textAlign: 'left',
    },

    /* MAIN GRID, CONTAINS EACH MAIN PANEL */
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

    /* HEADER/NAV BAR */
    header: {
      display: 'flex',
      alignItems: 'center',
      gridArea: 'header',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      gap: '0%',
      paddingInline: '8.7%',
      flexDirection: 'row',
    },

    headerUnderline: {
      //make a line under the header
      borderBottom: 'solid' + ' ' + 'lightgray',
      borderBottomWidth: '3px',
      gridArea: 'header',
      width: '91.5%',
      //center the line
      justifySelf: 'end',
    },

    /* CONTAINS AVATAR */
    avatarContainer: {},

    /* TITLE USED IN HEADER */
    title: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Trebuchet MS',
      fontSize: '38px',
      fontWeight: 'bold',
    },

    /* NAVBAR */
    directory: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '20%',
      fontFamily: 'Trebuchet MS',
      fontSize: '21px',
      fontWeight: 'bold',
    },
    /* NAVBAR Home */
    directoryHome: {},
    /* NAVBAR Works */
    directoryWorks: {},
    /* NAVBAR About */
    directoryProjects: {},
    /* NAVBAR Projects */
    directoryServices: {},

    /* NAVBAR CHATBOX */
    chatBox: {
      display: 'flex',
      alignItems: 'center',
      border: 'solid' + ' ' + '3px',
      height: '50px',
      padding: '0 3%',
      fontFamily: 'Trebuchet MS',
      fontSize: '21px',
      fontWeight: 'bold',
    },

    /* INTRO TEXT CONTAINER */
    introBox: {
      paddingInline: '15%',
      backgroundColor: 'white',
      textAlign: 'left',
    },

    /* CONTAINS TOP LINE OF INTRO */
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

    /* TEXT IN TOP LINE OF INTRO */
    largeTextTop: {
      width: '400px',
      marginTop: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '80px',
      fontWeight: 'bold',
      fontFamily: 'Gill Sans (sans-serif)',
      maxHeight: '100px',
    },

    /* CHIP IN TOP LINE OF INTRO TEXT */
    largeChip: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70px',
      width: '200px', // Adjust the width as needed
      fontSize: '30px',
      fontWeight: 'bold',
      backgroundColor: 'purple',
      borderColor: 'purple',
      color: 'white',
      marginLeft: '50px',
      padding: '0 40px', // Adjust the padding as needed
      paddingBottom: '3px',
      marginTop: '20px',
      borderRadius: '40px', // Adjust the border radius to make it oval-shaped
    },

    /* CONTAINS BOTTOM LINE OF INTRO */
    bottomIntroLine: {
      fontFamily: 'Gill Sans (sans-serif)',
      fontSize: 'xx-large',
    },

    /* GRID OF STATS USED IN THE BOTTOM OF THE MAIN LEFT CONTAINER */
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

    /* THE HIRE AND PROJECTS BUTTONS */
    hireAndProjectsButtons: {
      gridArea: 'hireprojects',
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '350px',
      minWidth: '325px',
    },

    /* HIRE BUTTON */
    hireMe: {
      gridArea: 'hire',
      backgroundColor: '#ff4d00',
      color: 'white',
      width: '150px',
      height: '55px',
      paddingRight: '20px',
      fontFamily: 'Monospace',
      fontSize: '20px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },

    /* PROJECTS BUTTON */
    projects: {
      gridArea: 'projects',
      width: '150px',
      height: '55px',
      paddingRight: '20px',
      fontFamily: 'Monospace',
      fontSize: '23px',
      fontWeight: 'bold',
      borderRadius: '0px',
    },

    /* LOGO USED IN CENTER OF SCREEN */
    mainLogo: {
      gridArea: 'logo',
      width: 'auto',
      maxHeight: '100px',
    },

    /* CLIENTS CONTAINER (IS FLEX WITH LARGE AND SMALL TEXT) */
    clients: {
      gridArea: 'clients',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'flex-start',
      alignContent: 'start',
    },

    /* Finished Projects */
    finishedProjects: {
      gridArea: 'finprojects',
      display: 'flex',
      flexDirection: 'column',
    },

    /* Contact Section */
    contact: {
      gridArea: 'contact',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      paddingLeft: '100px',
    },

    /* TEMPORARY PROJECT FLEX ITEMS */
    projStatA: {},
    projStatB: {},
    projStatC: {},

    /* IMAGE AREA */
    content: {
      gridArea: 'rightpan',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 0,
      overflow: 'hidden',
    },

    /* PROJECT BUTTON */
    project: {
      height: '80%',
      backgroundColor: 'white',
      minHeight: theme.spacing(20),
      margin: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },

    /* IMAGE IN PROJECT BUTTON */
    leafPhoto: {
      gridArea: 'logo',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },

    /* FOOTER */
    footerBulkContainer: {
      display: 'flex',
      color: 'white',
      backgroundColor: '#212427',
      justifyContent: 'space-around',
      fontFamily: 'Trebuchet MS',
      fontSize: '25px',
      fontWeight: 'normal',
      paddingBlock: '50px',
    },

    /* FOOTER LEFT COLUMN */
    footerLeftColumn: {
      display: 'flex',
      height: 'auto',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      minHeight: '100%',
      maxWidth: '200px',
      textAlign: 'left',
    },

    /* FOOTER PROJECTS */
    footerProjects: {
      display: 'flex',
      fontSize: '30px',
    },

    /* FOOTER BUTTON */
    footerButton: {
      display: 'flex',
      whiteSpace: 'nowrap',
      width: '180px',
      height: '55px',
      backgroundColor: '#ffc100',
      fontFamily: 'Trebuchet MS',
      fontSize: '22px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },

    /* FOOTER RIGHT COLUMN */
    footerRightColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      minHeight: '100%',
      minWidth: '300px',
    },

    /* FOOTER WEBSITE COUNT */
    footerWebsiteCount: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: 'solid' + ' ' + 'gray',
      borderBottomWidth: '1px',
      paddingBottom: '10px',
    },

    /* FOOTER MOBILE COUNT */
    footerMobileCount: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: 'solid' + ' ' + 'gray',
      borderBottomWidth: '1px',
      paddingBottom: '10px',
    },

    /* FOOTER BRAND COUNT */
    footerBrandCount: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: 'solid' + ' ' + 'gray',
      borderBottomWidth: '1px',
      paddingBottom: '10px',
    },

    /* FOOTER NAME */
    footerName: {
      display: 'flex',
    },

    /* FOOTER NUM */
    footerNum: {
      display: 'flex',
    },
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const [hireClicked, setHireClicked] = useState(false)

  const handleHireMeClick = async () => {
    const firestore = getFirestore()

    /* TRY STATEMENT FOR FIRESTORE */
    try {
      await addDoc(collection(firestore, 'hires'), { value: 1 })
      setHireClicked(true)
    } catch (error) {
      console.log('Error adding document:', error)
    }
  }

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
        {/* <div className={classes.avatarContainer}>
          {/* <Avatar className={classes.chrisAvatar}>CB</Avatar> */}

        <div className={classes.title}>Chris' Portfolio</div>
        <div className={classes.directory}>
          <div className={classes.directoryHome}>Home</div>
          <div className={classes.directoryWorks}>Works</div>
          <div className={classes.directoryProjects}>Projects</div>
          <div className={classes.directoryServices}>Services</div>
        </div>
        <div className={classes.chatBox}>Let's chat</div>
      </div>
      <div className={classes.headerUnderline} />

      <div className={classes.introBox}>
        <div className={classes.topIntroLine}>
          <div className={classes.largeTextTop}>
            Hi! I am
            <div className={classes.largeChip}>UI/UX</div>
          </div>
        </div>
        <div className={classes.bottomIntroLine}>
          <div className={classes.largeText}>Chris Beaudoin</div>
        </div>
        <h3 className={classes.subText}>
          Designing user interfaces for over 90 years as a product designer
        </h3>
        <div className={classes.introBottomComponents}>
          <div className={classes.hireAndProjectsButtons}>
            <Button className={classes.hireMe} variant="contained" onClick={handleHireMeClick}>
              Hire me
            </Button>
            {hireClicked && <p>Hire button clicked! Value of 1 added to Firestore.</p>}
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
      {/* <div className={classes.footer}> */}
      <div className={classes.footerBulkContainer}>
        <div className={classes.footerLeftColumn}>
          <div className={classes.footerProjects}>Project Statistics 2022</div>
          {/* TODO ADD onClick={handleKnowMoreClick} */}
          <Button className={classes.footerButton} variant="contained">
            Know More
          </Button>
        </div>
        <div className={classes.footerRightColumn}>
          <div className={classes.footerWebsiteCount}>
            <div className={classes.footerName}>Website Design</div>
            <div className={classes.footerNum}>75</div>
          </div>
          <div className={classes.footerMobileCount}>
            <div className={classes.footerName}>Mobile App Design</div>
            <div className={classes.footerNum}>64</div>
          </div>
          <div className={classes.footerBrandCount}>
            <div className={classes.footerName}>Brand Identity</div>
            <div className={classes.footerNum}>38</div>
          </div>
        </div>
      </div>
      {/* </div> */}
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

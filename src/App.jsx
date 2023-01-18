import React from 'react';
import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from 'mui-image';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#AA8B39',
      text: '#032536',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#AA5039',
    },
  },
});

const heights = [300, 125, 300, 0, 300];
const projects = [['Mulithreaded Webserver', 'Using C programming langu'+
  'age, created multi-threaded HTML webserver.'+
      ' Also included a proxy that handles load balancing using multiple serv'+
      'ers and caching on proxy server. Allowed for simultaneous connections a'+
      'nd caching for small html files.'],
['', ''],
['CSE 115A: Introduction to Software Engineering Project', 'Created and fully '+
  'deployed a full stack web application in a team of 5 members using the so'+
  'ftware development process, Scrum. Created a social media platform, allowi'+
  'ng users to have to comment and like certain stock option while also gettin'+
  'g stock recommendations and stock data visualization. Used the following te'+
  'chnologies: Flask, React.js, and PostgreSQL'], ['ggg', ''],
['Email Web Application', 'Created a fully deployable full stack web '+
'application by myself. Allowed different users to email other users,'+
  ' read their incoming emails and organize their mailboxes. Created th'+
  'e web application using a N.E.R.P(node.js, ExpressJS, ReactJS, Postgre'+
  'SQL) web application stack. Also created front-end and back-end test fo'+
  'r quality assurance.'], ['ggg', '']];

// const Item = styled(Paper)(({theme}) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

/**
 *
 * Allows for change in app bar when scrolled
 *
 * @param {*} props
 * @return {JSX}
 */
function HideOnScroll(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

/**
 *
 * Allows for change in app bar when scrolled
 *
 * @param {*} props
 * @return {JSX}
 */
function ScrollTop(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{position: 'fixed', bottom: 16, right: 16}}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

/**
 *
 * Allows for change in app bar when scrolled
 *
 * @param {*} props
 * @return {JSX}
 */
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
          '#' + event.target.id + '-anchor',
        );

        if (anchor) {
          anchor.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
          });
        }
      }}
      {...props}
    />
  );
}

/**
 * Simple component with no state.
 *
 * @param {*} props
 *
 * @return {object} JSX
 */
function App(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" sx={{backdropFilter: 'blur(10px)'}}>
        <Toolbar>
          <Typography color="secondary" variant="h4" sx={{flexGrow: 1}}>
            Nout Reusken
          </Typography>
          <Tabs value={value} onChange={handleChange}
            aria-label="nav tabs example">
            <LinkTab label="About me" id="aboutme" />
            <LinkTab label="Projects" id="projects" />
            <LinkTab label="Career" id="career" />
            <LinkTab label="Contact" id="contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{my: 2}}>
      </Box>
      <Box>
        <Toolbar id="back-to-top-anchor"/>
        <div className="container" id="aboutme-anchor">
          <div className="border">
            <div className="shape">
              <div className="content">
                <Grid container spacing={20}>
                  <Grid xs={4} className='avatar'>
                    <Avatar
                      alt="Nout Reusken"
                      src="https://avatars.githubusercontent.com/u/90160729?v=4"
                      sx={{width: 300, height: 300}}
                    />
                  </Grid>
                  <Grid xs={8}>
                    <Typography sx={{fontWeight: 'light'}}
                      variant="h2" color='primary.text'>
                      Meet
                    </Typography>
                    <Typography sx={{fontWeight: 'bold'}}
                      variant="h2" color='secondary'>
                      Nout Reusken
                    </Typography>
                    <Typography sx={{fontWeight: 'light'}}
                      variant="h6" color='#113C51'>
                        - Student at University of Califonia, Santa Cruz.
                        Studying Computer Science, BS.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <Toolbar/>
      </Box>
      <Toolbar/>
      <Divider variant="middle" />
      <div id='projects-anchor'>
        <Toolbar/>
        <Masonry columns={3} spacing={6}>
          {heights.map((height, index) => {
            if (height === 300) {
              return (
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5"
                        component="div" color="secondary">
                        {projects[index][0]}
                      </Typography>
                      <Typography variant="body2" color="primary.text">
                        {projects[index][1]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>);
            } else if (height === 0) {
              return undefined;
            } else {
              return ( <Typography sx={{fontWeight: 'bold'}}
                variant="h2" color='primary.text' align='center'>
                Projects
              </Typography>);
            };
          })}
        </Masonry>
      </div>
      <Toolbar/>
      <Divider variant="middle" />
      <Box sx={{height: '1000px'}} id="career-anchor">
        <Toolbar/>
        <Toolbar/>
        <Grid container>
          <Grid xs={4}>
            <Typography sx={{fontWeight: 'bold'}}
              variant="h2" color='primary.text' align='center'>
              Career
            </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  September 2019
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Start of Bachelor Degree</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  September 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Learning Support Services</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  October 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Multi-threaded HTML WebServer Project
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  January 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Student Union Assembly</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  February 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>CSE 115A Project</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  June 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Smarter Balanced</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  September 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>E-Mail Web
                  Application Project</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid xs={8}>
            <Image alt="hi" height='80vh' fit='scale-down'
              src="http://noutreusken.online/NoutReuskenResume.png"
            />
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box>
        <Toolbar/>
        <Typography sx={{fontWeight: 'bold'}}
          variant="h2" color='primary.text' align='center'>
          Contact
        </Typography>
        <Toolbar/>
        <Box id="contact-anchor" align={'center'}
          sx={{'& > :not(style)': {m: 1}}}>
          <Fab variant="extended" color="secondary" aria-label="add">
            <MailOutlineIcon sx={{mr: 1}}/>
            Mail
          </Fab>
          <Fab variant="extended" color="secondary" aria-label="add">
            <CallIcon sx={{mr: 1}}/>
            Phone
          </Fab>
          <Fab variant="extended" color="secondary" aria-label="add">
            <LinkedInIcon sx={{mr: 1}}/>
            LinkedIn
          </Fab>
          <Fab variant="extended" color="secondary" aria-label="add">
            <GitHubIcon sx={{mr: 1}}/>
            Github
          </Fab>
        </Box>
        <Toolbar/>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;

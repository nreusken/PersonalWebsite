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
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';

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

const heights = [250, 125, 250, 250, 250, 250, 250];

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        event.preventDefault();
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
            <LinkTab label="About me" href="#aboutme" />
            <LinkTab label="Projects" href="#projects" />
            <LinkTab label="Resume" href="/trash" />
            <LinkTab label="Contact" href="/spam" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{my: 2}}>
      </Box>
      <Box>
        <Toolbar id="back-to-top-anchor"/>
        <div className="container">
          <div className="border">
            <div className="shape">
              <div className="content">
                <Grid container spacing={20}>
                  <Grid xs={4} className='avatar'>
                    <Avatar
                      alt="Nout Reusken"
                      src="/static/images/avatar/1.jpg"
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
        <Toolbar/>
      </Box>
      <Masonry columns={3} spacing={3} id='projects'>
        {heights.map((height, index) => {
          if (height !== 125) {
            return (
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/icon.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles,
                      with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>);
          } else {
            return ( <Typography sx={{fontWeight: 'bold'}}
              variant="h2" color='secondary' align='center'>
              Projects
            </Typography>);
          };
        })}
      </Masonry>
      <Grid container spacing={10} sx={{height: '1000px'}}>
        <Grid xs={8} sx={{height: '100px'}}>
          <Item sx={{height: '80px'}}>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;

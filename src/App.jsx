import React from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
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
    <div>
      <AppBar color="transparent" sx={{backdropFilter: 'blur(10px)'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
            Nout Reusken
          </Typography>
          <Tabs value={value} onChange={handleChange}
            aria-label="nav tabs example">
            <LinkTab label="About me" href="/drafts" />
            <LinkTab label="Projects" href="/trash" />
            <LinkTab label="Contact" href="/spam" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{my: 2}}>
      </Box>
      <Toolbar id="back-to-top-anchor"/>
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
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LoginModal from '../Login/LoginModal';
import firebase from '../Firebase/Firebase';
import '../../styles/Nav.css';
import CoverPhoto from "../CoverPhoto";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div className={classes.root} id="bg-img">
      <div class="container">
        <div class="topnav">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className={classes.title} id="brandtitle">
                Dark Horse
              </Typography>
              <Button onClick={() => setShow(true)} color="inherit">
                Login
              </Button>
              <Button color="inherit">Sign Up</Button>
              <Button color="inherit">For Bands</Button>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
              <LoginModal onClose={() => setShow(false)} show={show} />
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <CoverPhoto />
    </div>
  );
  async function logout() {
    await firebase.logout();
    window.location.href = '/';
    console.log('logged out');
  }
}

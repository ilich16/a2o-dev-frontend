import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { mdiChessQueen } from '@mdi/js';
import { SvgIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import { mdiAlphabetical } from '@mdi/js';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const API_URL = 'http://127.0.0.1:8000/api/v1/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function formatUserInput(input) {
  return input.replace(/(\r\n|\n|\r)/gm, '%0A');
}

function FirstProblem() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const computeUserInput = () => {
    let inputFormatted = formatUserInput(input);
    let URL = API_URL + 'problem-1/?input=' + inputFormatted
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        let result = ''
        data.result.forEach(element => {
          result += element + '\n'
        });
        setOutput(result)
      });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Padel League
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink href='/home'>
            <ListItemIcon> <HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink href='/problem-1' selected>
            <ListItemIcon> <SportsTennisIcon /></ListItemIcon>
            <ListItemText primary="First problem" />
          </ListItemLink>
          <ListItemLink href='/problem-2'>
            <ListItemIcon> <SvgIcon><path d={mdiChessQueen} /></SvgIcon></ListItemIcon>
            <ListItemText primary="Second problem" />
          </ListItemLink>
          <ListItemLink href='/problem-3'>
            <ListItemIcon> <SvgIcon><path d={mdiAlphabetical} /></SvgIcon></ListItemIcon>
            <ListItemText primary="Third problem" />
          </ListItemLink>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ textAlign: 'center' }}>
          <Grid container spacing={6} justify="center" alignItems="center">
            <Grid item xs={12} sm={5}>
              <TextField id="standard-basic" multiline fullWidth rows={20} label="Input" value={input} onChange={handleInputChange} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={2} >
              <Button variant="contained" color="primary" onClick={computeUserInput}>
                Compute
              </Button>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField id="standard-basic" multiline fullWidth rows={20} label="Output" value={output} InputProps={{ readOnly: true, }} variant="outlined" />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

export default FirstProblem;
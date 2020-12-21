import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mdiChessQueen } from '@mdi/js';
import { SvgIcon } from '@material-ui/core';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import { mdiAlphabetical } from '@mdi/js';

const drawerWidth = 240;

const cardUseStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    padding: 16,
    margin: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// Style for the navigation drawer
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

export default function SimplePaper() {
  const cardClasses = cardUseStyles();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // Function to open the navigation drawer 
  const handleDrawerOpen = () => {
    setOpen(true);
  }

  // Function to close the navigation drawer 
  const handleDrawerClose = () => {
    setOpen(false);
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
            Home
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
          <ListItemLink href='/' selected>
            <ListItemIcon> <HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink href='/problem-1'>
            <ListItemIcon> <SportsTennisIcon /></ListItemIcon>
            <ListItemText primary="Padel League" />
          </ListItemLink>
          <ListItemLink href='/problem-2'>
            <ListItemIcon> <SvgIcon><path d={mdiChessQueen} /></SvgIcon></ListItemIcon>
            <ListItemText primary="Chess" />
          </ListItemLink>
          <ListItemLink href='/problem-3' >
            <ListItemIcon> <SvgIcon><path d={mdiAlphabetical} /></SvgIcon></ListItemIcon>
            <ListItemText primary="String Value" />
          </ListItemLink>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ margin: 24 }}>
          <Card className={cardClasses.root} style={{ textAlign: 'center' }}>
            <CardContent>
              <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
                A20 Dev
        </Typography>
              <Typography variant="h5" component="h2">
                Hiya!
        </Typography>
              <Typography className={cardClasses.pos} color="textSecondary">
                Thank you for visiting this small project, please choose one of the following problems to solve:
        </Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" color="primary" href='/problem-1'>
                    Padel League
              </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" color="primary" href='/problem-2'>
                    Chess
              </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" color="primary" href='/problem-3'>
                    String Value
              </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </div>
      </main>
    </div>
  );
}
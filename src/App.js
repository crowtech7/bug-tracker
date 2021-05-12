import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import FolderIcon from '@material-ui/icons/Folder';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import './App.css';
import thisIsFine from './assets/thisisfinedog.gif'

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.paper,
    },
    login: {
      position: 'relative',
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      background: '#0D2C34',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logo: {
      
    },
  }));

  
  function App(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <div className={classes.logo}>
        <img src={thisIsFine} alt="burninggif" />
        </div>
        <Divider />
        <List component="nav" aria-label="main folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Role Assignment" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Project Users" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="My Projects" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="My Tickets" />
        </ListItem>
      </List>
      
      <Divider />

      <List component="nav" aria-label="profile section">
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
     
      </List>

      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Bug Tracker
            </Typography>
            <div className={classes.login}>
            <Button variant='contained'>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="main folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          
        </main>
      </div>
    );
  }

  
  export default App;

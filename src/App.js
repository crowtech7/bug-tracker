import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import './App.css';

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
    appBar: {
      background: '#0D2C34',
    },
  }));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div className="App">
      <header className="App-header">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
              <Typography variant="h6" className={classes.title}>
          Bug Tracker
              </Typography>
              <Button variant='contained'>Login</Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
    </div>
  );
}

export default App;

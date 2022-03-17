import React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FcHome } from "react-icons/fc";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllProduct from '../AllProduct/AllProduct';
import AddProducts from '../AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
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
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();

  let { path, url } = useRouteMatch();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className = "dashboard">
      <div className={classes.toolbar} />
      <Divider />

      {/* setting dynamic Navber  */}

      <Nav.Link as={HashLink} to="/home#home"><Button color="inherit"><FcHome/>Home</Button></Nav.Link>
      <h6 className = "text text-primary fw-bold">For User</h6>
      <Link to={`${url}`}><Button variant="outlined">Dashboard</Button></Link>
      <br /> <br />
      <Link to={`${url}/addReview`}><Button variant="outlined">Review</Button></Link> 
      <br /><br />

      <Divider />

      <h6 className = "text text-primary fw-bold">For Admin</h6>
      <Link to={`${url}/allProducts`}><Button variant="outlined">All product</Button></Link>
      <br /> <br />
      <Link to={`${url}/allOrders`}><Button variant="outlined">All Orders</Button></Link>
      <br /> <br /> 
      <Link to={`${url}/addProducts`}><Button variant="outlined">Add product</Button></Link>
      <br /> <br />
      <Link to={`${url}/makeAdmin`}><Button variant="outlined">MAke Admin</Button></Link><br />
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      
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
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
       

        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/allProducts`}>
           <AllProduct></AllProduct>
        </Route>
        <Route path={`${path}/allOrders`}>
           <AllOrders></AllOrders>
        </Route>
        <Route path={`${path}/addProducts`}>
           <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/addReview`}>
           <AddReview></AddReview>
        </Route>
      </Switch>
       

      </main>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

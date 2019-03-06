import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import Photo from '@material-ui/icons/Photo';
import Phone from '@material-ui/icons/Phone'


import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Gallery from '../../Pages/Gallery';
import Contact from '../../Pages/Contacts';

import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
      width: 'auto',
      text: 'center'
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
      right: false,
    center: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
            <List>
                <ListItem button>
                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                    <Link to={"/home"} ><ListItemText> Home</ListItemText></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Person /></ListItemIcon>
                    <Link to={"/about"} ><ListItemText Link to={"/about"}>About</ListItemText></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Photo /></ListItemIcon>
                    <Link to={"/gallery"} ><ListItemText>Gallery</ListItemText></Link>
                </ListItem>
        </List>
        <Divider />
            <List>
                <br />
                <ListItemText center>Contatti</ListItemText>
          {['Cell', 'Email', 'Whatapp'].map((linktext, index) => (
              <ListItem button key={linktext} href="/">
              <ListItemIcon>{index % 2 === 0 ? <Phone href="/about"/> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={linktext} href="/"/>
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
            <List>
                <Link>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
                </Link>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
        <div>
            <MenuIcon variant="contained" color="inherit" onClick={this.toggleDrawer('left', true)} />
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
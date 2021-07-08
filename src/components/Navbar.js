import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  InputBase,
  Paper,
  Input,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import {
  Menu,
  Search,
  Apps,
  Mic,
  VideoCall,
  Notifications,
  YouTube,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background.default,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "sticky",
  },
  input: {
    width: "400px",
    // background: theme.palette.common.black,
  },
  icon: {
    margin: "0px 15px 0px 0px",
  },
  search: {
    margin: "0px 20px",
  },
  toolbar: {},
}));

export default function Navbar({ setExpandMenu, ExpandMenu }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.icon}
          onClick={() => {
            setExpandMenu(ExpandMenu ? false : true);
            console.log(ExpandMenu);
          }}
        >
          <Menu color="black" />
        </IconButton>
        <YouTube color="primary" fontSize="large" />
        {ExpandMenu}
        <Typography variant="h5" color="black">
          YouTube
        </Typography>
      </Toolbar>

      <Toolbar className={classes.toolbar}>
        <Paper>
          <Input className={classes.input} />
          <Search className={classes.search} />
        </Paper>

        <Mic />
      </Toolbar>

      <Toolbar className={classes.toolbar}>
        <VideoCall className={classes.icon} />
        <Apps className={classes.icon} />
        <Notifications className={classes.icon} />
        <Avatar color="primary">A</Avatar>
      </Toolbar>
    </AppBar>
  );
}

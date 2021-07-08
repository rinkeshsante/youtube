import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  PlaylistPlay,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function MyDrawer({ ExpandMenu }) {
  return (
    <Paper
      style={{
        width: ExpandMenu ? 200 : 60,
        position: "fixed",
        height: "100vh",
        borderRadius: 0,
      }}
    >
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>Home</ListItemText>}
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>Explore</ListItemText>}
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <Subscriptions />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>Subscriptions</ListItemText>}
          </ListItem>
        </Link>

        <Divider />

        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <VideoLibrary />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>Library</ListItemText>}
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>History</ListItemText>}
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <PlaylistPlay />
            </ListItemIcon>
            {ExpandMenu && <ListItemText>your Playlist</ListItemText>}
          </ListItem>
        </Link>
        <Divider />
      </List>
    </Paper>
  );
}

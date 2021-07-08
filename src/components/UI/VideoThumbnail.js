import React from "react";
import { Typography, makeStyles, Avatar } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const uesStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
  root: {
    padding: 10,
  },
  img: {
    width: "20hw",
  },
}));

export default function VideoThumbnail() {
  const classes = uesStyle();
  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JA2tH5nZ6gVkEUqE_Eq8mwHaEK%26pid%3DApi&f=1"
      />

      <div
        className={classes.container}
        style={{ justifyContent: "space-between" }}
      >
        <div className={classes.container}>
          <Avatar>As</Avatar>
          <div>
            <Link to="/video">
              <Typography variant="h6">hader</Typography>
            </Link>

            <Typography variant="caption" className={classes.alignCenter}>
              chanel name
              <CheckCircle fontSize="inherit" />
            </Typography>
            <Typography variant="caption">
              {20000} Views - {"2 years"} ago
            </Typography>
          </div>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
}

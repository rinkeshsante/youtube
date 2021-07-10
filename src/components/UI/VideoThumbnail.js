import React, { useState } from "react";
import { Typography, makeStyles, Avatar, IconButton } from "@material-ui/core";
import { CheckCircle, MoreVert } from "@material-ui/icons";
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

function dateDiff(date) {
  const date1 = new Date(date);
  const date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function VideoThumbnail({ data }) {
  const classes = uesStyle();
  return (
    <div className={classes.root}>
      <img className={classes.img} src={data.src} />
      <div
        className={classes.container}
        style={{ justifyContent: "space-between" }}
      >
        <div className={classes.container}>
          <Avatar>{data.channel.avatar}</Avatar>
          <div>
            <Link
              to={`/video/${data.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="h6">{data.header}</Typography>
            </Link>

            <Typography variant="caption" className={classes.alignCenter}>
              {data.channel.name}
              <CheckCircle fontSize="inherit" />
            </Typography>
            <Typography variant="caption">
              {data.views} Views - {dateDiff(data.upload_date) + " days"} ago
            </Typography>
          </div>
        </div>
        <div>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

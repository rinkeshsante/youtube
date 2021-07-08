import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import LabelBar from "./LabelBar";
import VideoThumbnail from "./UI/VideoThumbnail";

export default function Home() {
  const [Labels, setLabels] = useState([
    "one",
    "two",
    "three",
    "one",
    "two",
    "three",
    "one",
    "two",
    "three",
  ]);
  return (
    <div>
      <LabelBar data={Labels} />

      <Grid container style={{ padding: 15 }}>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
        <Grid item>
          <VideoThumbnail />
        </Grid>
      </Grid>
    </div>
  );
}

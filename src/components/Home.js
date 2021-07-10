import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import LabelBar from "./LabelBar";
import VideoThumbnail from "./UI/VideoThumbnail";
import LABELS from "./../data/getLabels";
import VIDEO_FEED from "../data/getVideoFeed";

export default function Home() {
  const [Labels, setLabels] = useState(LABELS);
  const [Vfeed, setVfeed] = useState(VIDEO_FEED);
  return (
    <div>
      <LabelBar data={Labels} />

      <Grid container style={{ padding: 15 }}>
        {Vfeed.map((data) => (
          <Grid item>
            <VideoThumbnail data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import VIDEO_FEED from "../data/getVideoFeed";

const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  conn: {
    padding: 10,
  },
});

export default function VideoPage() {
  const classes = useStyles();
  const [Vdata, setVdata] = useState(VIDEO_FEED[0]);
  return (
    <>
      <Container>
        <Grid container>
          <Grid item sm={12} md={8} className={classes.conn}>
            <img src={Vdata.src} className={classes.image} />
            <Typography variant="h4">{Vdata.header}</Typography>
            <Typography varinat="p">
              {Vdata.views} views -{Vdata.upload_date}
            </Typography>
            <hr />
          </Grid>
          <Grid item sm={12} md={4}>
            0
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

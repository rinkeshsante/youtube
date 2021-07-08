import React, { useState } from "react";
import { Chip, makeStyles, Paper } from "@material-ui/core";

const uesStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 5,
    borderRadius: 0,
  },
  chip: {
    margin: 5,
  },
}));

export default function LabelBar({ data }) {
  const [Selected, setSelected] = useState(data[0]);

  const classes = uesStyle();

  function getLabel(item) {
    if (item === Selected.item) {
      return (
        <Chip
          label={item}
          className={classes.chip}
          onClick={() => {
            setSelected({ item });
          }}
        />
      );
    } else {
      return (
        <Chip
          label={item}
          variant="outlined"
          className={classes.chip}
          onClick={() => {
            setSelected({ item });
          }}
        />
      );
    }
  }

  return (
    <Paper className={classes.root}>
      {data.map((item) => (
        <>{getLabel(item)}</>
      ))}
    </Paper>
  );
}

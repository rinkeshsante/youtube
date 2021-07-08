import React, { useState } from "react";
import { Chip, makeStyles, Paper } from "@material-ui/core";

const uesStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 5,
    position: "sticky",
  },
  chip: {
    margin: 5,
  },
}));

export default function LabelBar({ data }) {
  const [Selected, setSelected] = useState(data[0]);
  //   console.log(data);

  const classes = uesStyle();

  function getVariant(item) {
    // console.log(item);
    return item === Selected.item ? false : true;
  }

  return (
    <Paper className={classes.root}>
      {data.map((item) => (
        <>
          <Chip
            label={item}
            variant={getVariant(item)}
            className={classes.chip}
            onClick={() => {
              setSelected({ item });
            }}
          />
        </>
      ))}
    </Paper>
  );
}

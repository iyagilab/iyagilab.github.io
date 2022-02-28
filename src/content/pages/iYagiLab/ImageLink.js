import React from "react";
import bora from "./img/bora.png";
import dataIyagi from "./img/data-iyagi.png";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
    height: 100,
    marginLeft: 35,
  },
}));

function ImageLink() {
  const classes = useStyles();
  return (
    <>
      <img
        className={classes.img}
        src={bora}
        // style={{ width: 100, height: 100, marginLeft: 35 }}
        alt="bora"
      />
      <img
        className={classes.img}
        src={dataIyagi}
        // style={{ width: 100, height: 100, marginLeft: 35 }}
        alt="dataIyagi"
      />
    </>
  );
}

export default ImageLink;

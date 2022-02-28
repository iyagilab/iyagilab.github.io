import React from "react";
import use1 from "./img/use1.png";
import use2 from "./img/use2.png";
import use3 from "./img/use3.png";
import { makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  img: {
    width: 299,
    height: 299,
    margin: 5,
  },
  imgMobile: {
    width: "100%",
    height: "10%",
  },
}));

function Use() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 401px)");
  return (
    <div
    // style={{ textAlign: "center" }}
    >
      <img
        src={use1}
        className={isMobile ? classes.imgMobile : classes.img}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="use1"
      />
      <img
        src={use2}
        className={isMobile ? classes.imgMobile : classes.img}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="use2"
      />
      <img
        src={use3}
        className={isMobile ? classes.imgMobile : classes.img}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="use3"
      />
    </div>
  );
}

export default Use;

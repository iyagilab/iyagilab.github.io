import React from "react";
import Manufacturing from "./img/Manufacturing.png";
import Profiling from "./img/Profiling.png";
import Summary from "./img/Summary.png";

// import { makeStyles } from "@material-ui/styles";
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

function ResearchImg() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 401px)");
  return (
    <>
      <img
        className={isMobile ? classes.imgMobile : classes.img}
        src={Summary}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="Summary"
      />
      <img
        className={isMobile ? classes.imgMobile : classes.img}
        src={Profiling}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="Profiling"
      />
      <img
        className={isMobile ? classes.imgMobile : classes.img}
        src={Manufacturing}
        // style={{ width: 295, height: 270, margin: 5 }}
        alt="Manufacturing"
      />
    </>
  );
}

export default ResearchImg;

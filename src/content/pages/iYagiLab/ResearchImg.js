import React from "react";
import Manufacturing from "./img/Manufacturing.png";
import Profiling from "./img/Profiling.png";
import Summary from "./img/Summary.png";

function ResearchImg() {
  return (
    <>
      <img
        src={Manufacturing}
        style={{ width: 270, height: 250, marginRight: 30 }}
        alt="Manufacturing"
      />
      <img
        src={Profiling}
        style={{ width: 270, height: 250, marginRight: 30 }}
        alt="Profiling"
      />
      <img
        src={Summary}
        style={{ width: 270, height: 250, marginRight: 30 }}
        alt="Summary"
      />
    </>
  );
}

export default ResearchImg;

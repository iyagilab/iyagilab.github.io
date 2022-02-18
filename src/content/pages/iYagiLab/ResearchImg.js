import React from "react";
import Manufacturing from "./img/Manufacturing.png";
import Profiling from "./img/Profiling.png";
import Summary from "./img/Summary.png";

function ResearchImg() {
  return (
    <>
      <img
        src={Summary}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="Summary"
      />
      <img
        src={Manufacturing}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="Manufacturing"
      />
      <img
        src={Profiling}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="Profiling"
      />
    </>
  );
}

export default ResearchImg;

import React from "react";
import Manufacturing from "./img/Manufacturing.png";
import Profiling from "./img/Profiling.png";
import Summary from "./img/Summary.png";

function ResearchImg() {
  return (
    <>
      <img
        src={Summary}
        style={{ width: 295, height: 270, margin: 5 }}
        alt="Summary"
      />
      <img
        src={Profiling}
        style={{ width: 295, height: 270, margin: 5 }}
        alt="Profiling"
      />
      <img
        src={Manufacturing}
        style={{ width: 295, height: 270, margin: 5 }}
        alt="Manufacturing"
      />
    </>
  );
}

export default ResearchImg;

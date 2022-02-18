import React from "react";
import use1 from "./img/use1.png";
import use2 from "./img/use2.png";
import use3 from "./img/use3.png";

function Use() {
  return (
    <div
    // style={{ textAlign: "center" }}
    >
      <img
        src={use1}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="use1"
      />
      <img
        src={use2}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="use2"
      />
      <img
        src={use3}
        style={{ width: 295, height: 270, marginRight: 10 }}
        alt="use3"
      />
    </div>
  );
}

export default Use;

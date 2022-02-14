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
        style={{ width: 180, height: 180, marginRight: 30 }}
        alt="use1"
      />
      <img
        src={use2}
        style={{ width: 180, height: 180, marginRight: 30 }}
        alt="use2"
      />
      <img
        src={use3}
        style={{ width: 180, height: 180, marginRight: 30 }}
        alt="use3"
      />
    </div>
  );
}

export default Use;
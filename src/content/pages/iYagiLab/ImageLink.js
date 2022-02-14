import React from "react";
import bora from "./img/bora.png";
import dataIyagi from "./img/data-iyagi.png";

function ImageLink() {
  return (
    <>
      <img
        src={bora}
        style={{ width: 100, height: 100, marginLeft: 35 }}
        alt="bora"
      />
      <img
        src={dataIyagi}
        style={{ width: 100, height: 100, marginLeft: 35 }}
        alt="dataIyagi"
      />
    </>
  );
}

export default ImageLink;

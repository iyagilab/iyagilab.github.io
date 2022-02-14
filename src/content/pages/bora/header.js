import React from "react";
import logo from "./logo.png";

function header() {
  return (
    <div>
      <img src={logo} style={{ width: "100%", height: 300 }} alt="logo" />
      {/* <img style={{ width: 928, height: 326 }} alt="logo" src="./logo.png" /> */}
      {/* <img
        style={{ width: "100%" }}
        src="https://capsule-render.vercel.app/api?type=waving&color=9051D1&height=300&section=header&text=BORA&fontColor=9051D1&animation=twinklingfontSize=20&desc=콘텐츠매니저&descAlignY=25"
        alt="header"
      /> */}
    </div>
  );
}

export default header;

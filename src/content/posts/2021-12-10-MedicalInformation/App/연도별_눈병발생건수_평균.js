import React from "react";
// import Plot from "react-plotly.js";
import pxLine from "../json/연도별_눈병발생건수_평균.json";
import loadable from "@loadable/component";

function App() {
  const Plot = loadable(() => import("react-plotly.js"));
  return (
    <Plot data={pxLine.data} layout={pxLine.layout} style={{ width: `100%` }} />
  );
}

export default App;

import React from "react";
import pxLine from "../json/연도별경남폐지수.json";
import loadable from "@loadable/component";

function App() {
  const Plot = loadable(() => import("react-plotly.js"));
  return (
    <Plot data={pxLine.data} layout={pxLine.layout} style={{ width: `100%` }} />
  );
}

export default App;
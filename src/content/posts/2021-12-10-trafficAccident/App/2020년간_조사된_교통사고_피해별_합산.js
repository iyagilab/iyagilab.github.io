import React from "react";
import pxLine from "../json/2020년간_조사된_교통사고_피해별_합산.json";
import loadable from "@loadable/component";

function App() {
  const Plot = loadable(() => import("react-plotly.js"));
  return (
    <Plot data={pxLine.data} layout={pxLine.layout} style={{ width: `100%` }} />
  );
}

export default App;

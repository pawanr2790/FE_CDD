// STEP 1 - Include Dependencies

// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories = [
  {
    category: [
      { label: "Current" },
      { label: "1-30" },
      { label: "31-60" },
      { label: "61-90" },
      { label: "91+" },
    ],
  },
];
// STEP 3- Construct the dataset comprising multiple series
const dataset = [
  {
    seriesname: "Accounts Receivable",
    data: [
      { value: "2.45" },
      { value: "2.02" },
      { value: "1" },
      { value: "0.75" },
      { value: "0.25" },
    ],
  },
  {
    seriesname: "Accounts Payable",
    data: [
      { value: "1.1" },
      { value: "0.11" },
      { value: "0.09" },
      { value: "0.07" },
      { value: "0.04" },

    ],
  },
];

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "mscolumn2d", // The chart type
  width: "700", // Width of the chart
  height: "405", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    //Chart Configurations
    chart: {
      theme: "fusion",
      caption: "Total Accounts Receivable and Payable Aging",
      xAxisname: "Quarter",
      yAxisName: "Revenues (In USD)",
      numberSuffix: "M",
      plotFillAlpha: "80",
      divLineIsDashed: "1",
      divLineDashLen: "1",
      divLineGapLen: "1",
    },
    categories: categories,
    dataset: dataset,
  },
};
// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
function MultiSeries() {
  return <ReactFC {...chartConfigs} />;
}

export default MultiSeries;

// STEP 1 - Include Dependencies

// Include react
import React from 'react';
import "./App.css";

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories = [{
    "category": [{
        "label": "Jan"
      },
      {
        "label": "Feb"
      },
      {
        "label": "Mar"
      },
      {
        "label": "Apr"
      },
      {
        "label": "May"
      },
      {
        "label": "Jun"
      },
      {
        "label": "Jul"
      },
      {
        "label": "Aug"
      },
      {
        "label": "Sep"
      },
      {
        "label": "Oct"
      },
      {
        "label": "Nov"
      },
      {
        "label": "Dec"
      }
    ]
  }
]
// STEP 3- Construct the dataset comprising combination series
 const dataset = [
  {
    "seriesName": "Gross Working Capital",
    "renderAs": "line",
    "data": [{
        "value": "7.75"
      },
      {
        "value": "18"
      },
      {
        "value": "248.7"
      },
      {
        "value": "256.9"
      },
      {
        "value": "203.9"
      },
      {
        "value": "199.5"
      },
      {
        "value": "365.7"
      },
      {
        "value": "560.8"
      },
      {
        "value": "92.1"
      },
      {
        "value": "323.8"
      },
      {
        "value": "227.5"
      },
      {
        "value": "0"
      }
    ]
  },
  {
    "seriesName": "Net Working Capital",
    "renderAs": "line",
    "data": [{
        "value": "0"
      },
      {
        "value": "18"
      },
      {
        "value": "136.54"
      },
      {
        "value": "220.1"
      },
      {
        "value": "-107.8"
      },
      {
        "value": "-18.7"
      },
      {
        "value": "-21.7"
      },
      {
        "value": "490.5"
      },
      {
        "value": "-7.2"
      },
      {
        "value": "300.2"
      },
      {
        "value": "198.7"
      },
      {
        "value": "-50"
      }
    ]
  }
]

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'mscombi2d',// The chart type
    width: '837', // Width of the chart
    height: '500', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "Net Working Capital vs Gross Working Capital",
          "subCaption": "Sales analysis of last year",
          "xAxisname": "Month",
          "yAxisName": "Values ",
          "numberSuffix": "K",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5",
          "theme": "fusion"
        },
        "categories": categories,
        "dataset": dataset
      }
    }

// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
function LineChart() {

     return (
     <ReactFC
        {...chartConfigs}/>
     );

}

export default LineChart;
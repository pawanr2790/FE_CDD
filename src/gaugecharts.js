// STEP 1 - Include Dependencies

// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import the Widgets
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

//STEP 2 - Defining the dataset for the angular gauge along with the color configuration



// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
function GaugeCharts(props){
  console.log(props);
  const colorRange = {
    "color": [{
      "minValue": "0",
      "maxValue": props.value,
      "code": props.color,
    }, {
      "minValue": props.value,
      "maxValue": props.upperLimit,
      "code": "#DCDCDC"
    }]
  };
  
  const dials = {
    "dial": [{
      "value": props.value,
    }]
  };
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
      type: 'angulargauge',// The chart type
      width: '250', // Width of the chart
      height: '300', // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
          "chart": {
            "caption":props.title,
            "subcaption": props.subtitle,
            "lowerLimit": "0", //
            "upperLimit": props.upperLimit,
            "theme": "fusion",
            "showvalue": "1",
          },
          "colorRange": colorRange,
          "dials": dials
      }
  }
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  
}

export default GaugeCharts;

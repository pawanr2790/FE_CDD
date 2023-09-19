import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Profit and Loss Summary",
    subcaption: "",
    pyaxisname: "sales",
    syaxisname: "Profit Loss",
    snumbersuffix: "%",
    syaxismaxvalue: "25",
    theme: "candy",
    showvalues: "0",
    drawcrossline: "1",
    divlinealpha: "20",
    showLegend:'0',
    bgColor:'#ffffff'
  },
  categories: [
    {
      category: [
        {
          label: "Jan",
        },
        {
          label: "Feb",
        },
        {
          label: "Mar",
        },
        {
          label: "Apr",
        },
        {
          label: "May",
        },
        {
          label: "Jun",
        },
        {
          label: "Jul",
        },
        {
          label: "Aug",
        },
        {
          label: "Sep",
        },
        {
          label: "Oct",
        },
        {
          label: "Nov",
        },
        {
          label: "Dec",
        },
      ],
    },
  ],
  dataset: [
    {
      dataset: [
        {
          seriesname: "Honda City",
          data: [
            {
              value: "500",
            },
            {
              value: "600",
            },
            {
              value: "510",
            },
            {
              value: "700",
            },
            {
              value: "800",
            },
            {
              value: "900",
            },
            {
                value: "1000",
              },
              {
                value: "1100",
              },
              {
                value: "1210",
              },
              {
                value: "1300",
              },
              {
                value: "1350",
              },
              {
                value: "1400",
              },
          ],
        },
        {
          seriesname: "Honda Civic",
          data: [
            {
              value: "1000",
            },
            {
              value: "1400",
            },
            {
              value: "1300",
            },
            {
              value: "1500",
            },
            {
              value: "1600",
            },
            {
              value: "1750",
            },
            {
                value: "1800",
              },
              {
                value: "1900",
              },
              {
                value: "1950",
              },
              {
                value: "2020",
              },
              {
                value: "2100",
              },
              {
                value: "2170",
              },
          ],
        },
        {
            seriesname: "Honda Cccivic",
            data: [
              {
                value: "1200",
              },
              {
                value: "1500",
              },
              {
                value: "1600",
              },
              {
                value: "1700",
              },
              {
                value: "1800",
              },
              {
                value: "1950",
              },
              {
                  value: "2000",
                },
                {
                  value: "2190",
                },
                {
                  value: "2250",
                },
                {
                  value: "2320",
                },
                {
                  value: "2400",
                },
                {
                  value: "2470",
                },
            ],
          },
      ],
    },
    {
      dataset: [
        {
          seriesname: "Hyundai Sonata",
          data: [
            {
              value: "0",
            },
            {
              value: "-700",
            },
            {
              value: "-800",
            },
            {
              value: "200",
            },
            {
              value: "300",
            },
            {
              value: "500",
            },
            {
                value: "1200",
              },
              {
                value: "1400",
              },
              {
                value: "1500",
              },
              {
                value: "1650",
              },
              {
                value: "2770",
              },
              {
                value: "2200",
              },
          ],
        },
      ],
    },
  ],
};

function MyComponent() {
  return (
    <ReactFusioncharts
      type="msstackedcolumn2dlinedy"
      width="100%"
      height="500"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
export default MyComponent;

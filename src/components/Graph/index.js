import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Properti", "Emas", "Reksadana", "Deposito"],
  ["2013", 1000, 400, 500, 1000],
  ["2014", 1170, 460, 800, 900],
  ["2015", 660, 1120, 1200, 800],
  ["2016", 1030, 540, 420, 800],
];

const Graph = () => {
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        width={"750px"}
        height={"400px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: "",
          hAxis: { title: "", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 , maxValue : 5000},
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: "60%", height: "70%" },
          // lineWidth: 25
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default Graph;

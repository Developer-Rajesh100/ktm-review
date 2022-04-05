import React from "react";
import "./FirstChart.css";
import { Line, LineChart, Tooltip } from "recharts";

const FirstChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <h1 className="text-center mt-12  text-5xl font-bold raj">Sell</h1>
      <div className="total">
        <div className="contain">
          <LineChart width={1180} height={400} data={data}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default FirstChart;

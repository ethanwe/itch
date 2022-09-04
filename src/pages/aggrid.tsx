import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { NextPage } from "next";

const Games: NextPage = () => {
  const [rowData] = useState([
    {
      game_number: "1",
      month: "Jan 22",
      date: "08/22/22",
      teams: "test",
      blackTeamScore: 11,
      redTeamScore: 5,
    },
    {
      game_number: "2",
      month: "Feb 22",
      date: "08/22/22",
      teams: "test",
      blackTeamScore: 11,
      redTeamScore: 5,
    },
    {
      game_number: "3",
      month: "March 22",
      date: "08/22/22",
      teams: "test",
      blackTeamScore: 11,
      redTeamScore: 5,
    },
  ]);

  const options = {
    autoSize: true,
    data: rowData,
    theme: {
      palette: {
        fills: ["#19A0AA", "#F15F36"],
        strokes: ["#19A0AA", "#F15F36"],
      },
      overrides: {
        column: {
          series: {
            highlightStyle: {
              series: {
                dimOpacity: 0.3,
              },
            },
          },
        },
      },
    },
    title: {
      text: "Games",
      fontSize: 18,
    },
    subtitle: {
      text: "ITCH",
    },
    series: [
      {
        type: "column",
        xKey: "month",
        yKey: "blackTeamScore",
        yName: "black",
      },
      {
        type: "column",
        xKey: "month",
        yKey: "redTeamScore",
        yName: "red",
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
      },
    ],
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgChartsReact options={options}></AgChartsReact>
    </div>
  );
};
export default Games;

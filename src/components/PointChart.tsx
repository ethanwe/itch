import { Game, Score } from "@prisma/client";
import { AgChartsReact } from "ag-charts-react";
import { time } from "ag-charts-community";

export interface PointChartProps {
  games:
    | (Game & {
        scores: Score[];
      })[]
    | undefined;
}

export const PointChart = ({ games }: PointChartProps) => {
  const rowData = games?.map((g) => {
    const redTeamScore = g.scores.find((s) => s.teamId === 1)?.scoreValue;
    const blackTeamScore = g.scores.find((s) => s.teamId === 2)?.scoreValue;
    if (!g.date) throw new Error("need date");
    const date = new Date(g.date);
    return {
      game_number: g.id,
      date,
      teams: "test",
      blackTeamScore,
      redTeamScore,
    };

    //   <p key={g.id}>
    //     {g.id} - {g.date && new Date(g.date).toLocaleDateString()} - Red Team:{" "}
    //     {redTeamScore?.scoreValue} - Black Team:
    //     {blackTeamScore?.scoreValue}
    //   </p>
  });
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
        xKey: "date",
        yKey: "blackTeamScore",
        yName: "black",
      },
      {
        type: "column",
        xKey: "date",
        yKey: "redTeamScore",
        yName: "red",
      },
    ],
    axes: [
      {
        type: "time",
        position: "bottom",
        tick: {
          count: time.month,
        },
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

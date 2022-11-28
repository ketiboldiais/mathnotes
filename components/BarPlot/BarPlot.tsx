import { range, scaleBand, scaleLinear } from "d3";
import * as CSS from "csstype";

type BarPlotDatum = [string | number, number];

interface BarPlotProps {
  data: [string | number, number][];
  width: number;
  height: number;
  wh: [number, number];
  margin: number;
  margins: [number, number, number, number];
  dom: [number, number];
  ran: [number, number];
  id: string;
}



function getGroups(data: [string | number, number][]): string[] {
  const L = data.length;
  let out: string[] = [];
  for (let i = 0; i < L; i++) {
    out.push(`${i}`);
  }
  return out;
}

export const BarPlot = ({
  data,
  width = 300,
  height = 300,
  wh = [width, height],
  margin = 10,
  margins = [margin, margin, margin, margin],
  dom = [-10, 10],
  ran = [-10, 10],
  id,
}: BarPlotProps) => {
  const svgWidth = wh[0] - (margins[1] + margins[2]);
  const svgHeight = wh[1] - (margins[0] + margins[3]);
  const xScale = scaleBand().domain(getGroups(data)).range([0, svgWidth]).padding(0.5);
  const yScale = scaleLinear().range([svgHeight, 0]);
  const containerStyles: CSS.Properties = {
    display: "block",
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    verticalAlign: "top",
    overflow: "hidden",
  };
  const contentStyles: CSS.Properties = {
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0,
  };
  return (
    <div className={"BarPlotCont"} style={containerStyles}>
      <div className={"ContentBarPlot"} style={contentStyles}>
        <svg
          viewBox={`0 0 ${svgWidth + margins[1] + margins[2]} ${
            svgHeight + margins[0] + margins[3]
          }`}
          preserveAspectRatio={`xMidYMid meet`}
        >
          <g className={"BarPlot_Bars"} transform={`translate(${margins[1]},${margins[0]})`}>
            {data.map((bar, index) => {
              return (
                <rect
                  key={`bar${id}-${index}`}
                  x={`${xScale(`${index}`)}`}
                  y={`${0}`}
                  width={`${xScale.bandwidth()}`}
                  height={`${yScale(bar[1])}`}
                  fill={"#000"}
                  stroke={"black"}
                  strokeWidth={1}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

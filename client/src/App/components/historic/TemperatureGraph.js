import React from 'react';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart, Resizable, Baseline } from "react-timeseries-charts";
import { TimeSeries } from "pondjs";
import { List } from 'semantic-ui-react';

const points = [
  [1545859474.32346, 15.5],
  [1545859804.70632, 17.12],
  [1545859823.26981, 21.05],
  [1545859834.9573, 21.05],
  [1545859850.73602, 21.05],
  [1545859863.63447, 23.65],
  [1545859872.2545, 12.58],
  [1545859880.7958, 20]
]


const data = {
  name: "temperature",
  columns: ["time", "value"],
  points: points
};

const series = new TimeSeries(data);

const style = {
  value: {
    stroke: "#000000",
    opacity: 1
  }
}

const baselineStyle = {
  line: {
    stroke: "steelblue",
    strokeWidth: 1,
    opacity: 0.4,
    strokeDasharray: "none"
  },
  label: {
    fill: "steelblue"
  }
};

export default class TemperatureGraph extends React.Component {
  render() {
    console.log(series.timerange());
    return (
      <div>
        <Resizable>
          <ChartContainer timeRange={series.timerange()} format="%Hh%M">
            <ChartRow height="150">
              <YAxis
                id="axis1"
                label="Temperature (C)"
                min={series.min()}
                max={series.max()}
                width="20"
                type="linear"
                format=","
              />
              <Charts>
                <LineChart axis="axis1" series={series} columns={["value"]} style={style} />
                <Baseline
                  axis="axis1"
                  style={baselineStyle}
                  value={series.avg()}
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>
        <List horizontal>
          <List.Item>
            <List.Header>Max</List.Header>
            <List.Content>{series.max()}&#8451;</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Min</List.Header>
            <List.Content>{series.min()}&#8451;</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Average</List.Header>
            <List.Content>{series.avg()}&#8451;</List.Content>
          </List.Item>
        </List>
      </div>
    );
  }
}

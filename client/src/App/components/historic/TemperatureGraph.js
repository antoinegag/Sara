import React from 'react';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart, Resizable, Baseline } from "react-timeseries-charts";
import { TimeSeries } from "pondjs";
import { List } from 'semantic-ui-react';

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

export default function TemperatureGraph(props) {
  let points = [];
  props.data.forEach(element => {
    points.push([new Date(element.time).getTime() , element.temperature])
  });
  
  const data = {
    name: "temperature",
    columns: ["time", "value"],
    points: points
  };

  const series = new TimeSeries(data);

  return (
    <div>
      <Resizable>
        <ChartContainer timeRange={series.timerange()} format="%H:%M">
          <ChartRow height="150">
            <YAxis
              id="axis1"
              label="Temperature (C)"
              min={series.min()}
              max={series.max()}
              width="30"
              type="linear"
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
          <List.Content>{series.avg().toFixed(2)}&#8451;</List.Content>
        </List.Item>
      </List>
    </div>
  );
}


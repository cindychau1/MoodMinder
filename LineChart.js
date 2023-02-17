import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const LineChart = ({ chartData }) => {
  const colors = {
    1: '#2078b4',
    2: '#a6cee3',
    3: '#a2a2a2',
    4: '#b2df8a',
    5: '#32a02d',
  };
  return (
    <Line
      data={{
        labels: chartData.map((data) => data.date.slice(0, 10)),
        datasets: [
          {
            label: 'Mood Ratings',
            data: chartData.map((data) => data.mood),
            borderColor: '#e0e0e0',
            pointBackgroundColor: chartData.map((data) => colors[data.mood]),
            borderWidth: 2,
            pointRadius: 7,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            type: 'time',
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            reverse: false,
            grid: {
              display: false,
            },
            ticks: {
              stepSize: 1,
            },
          },
        },
      }}
    />
  );
};
export default LineChart;

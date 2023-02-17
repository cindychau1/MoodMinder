import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <Bar
      data={{
        labels: chartData.map((data) => data.day),
        datasets: [
          {
            label: 'Weekly Mood Rating',
            data: chartData.map((data) => data.mood),
            backgroundColor: [
              '#2078b4',
              '#a2a2a2',
              '#32a02d',
              '#b2df8a',
              '#2078b4',
              '#32a02d',
              '#a6cee3',
            ],
          },
        ],
      }}
      options={{
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
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
export default BarChart;

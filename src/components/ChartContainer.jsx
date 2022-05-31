import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import {
  Bar,
  Line,
  Bubble,
  Doughnut
} from 'react-chartjs-2';
import { useRecoilValue } from 'recoil'

import { chartDataState, chartTypeState } from '../recoil/atoms';
import { options } from '../config/chartConfig'
import { CHART_TYPES } from '../config/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = () => {
  const chartData = useRecoilValue(chartDataState)
  const chartType = useRecoilValue(chartTypeState)

  return (
    <div className="chart">
      <div className="chart_canvas-container">
        {chartType === CHART_TYPES.LINE && (
          <Line options={options} data={chartData} />
        )}
        {chartType === CHART_TYPES.BAR && (
          <Bar options={options} data={chartData} />
        )}
        {chartType === CHART_TYPES.BUBBLE && (
          <Bubble options={options} data={chartData} />
        )}
        {chartType === CHART_TYPES.DOUGHNUT && (
          <Doughnut options={options} data={chartData} />
        )}
      </div>
    </div>
  );
};

export default ChartContainer

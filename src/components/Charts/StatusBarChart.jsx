import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const StatusBarChart = () => {
  const xLabels = ['Karta', 'Viloyatlar', 'Filiallar'];

  return (
    <div className="w-full p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md">
      <BarChart
        xAxis={[
          {
            id: 'status',
            data: xLabels,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [120, 75, 30, 15],
            color: '#1B9C85',
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default StatusBarChart;

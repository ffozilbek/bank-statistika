import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 75, label: 'Humo' },
  { id: 1, value: 30, label: 'UzCard' },
];

const StatusPieChart = () => {
  return (
    <div className="w-full p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md">
      <PieChart
        series={[
          {
            data,
            arcLabel: (item) => `${item.label} (${item.value})`,
          },
        ]}
        width={400}
        height={300}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: '#fff',
            fontSize: 13,
          },
        }}
      />
    </div>
  );
};

export default StatusPieChart;

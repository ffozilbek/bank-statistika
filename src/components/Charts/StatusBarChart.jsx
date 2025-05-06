import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import useFetch from '../../hooks/useFetch';


const StatusBarChart = () => {
  const { data, loading, error } = useFetch("bank_filiali");

  return (
    <div className="w-full p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md">
      <LineChart
        width={400}
        height={300}
        series={[
          { data: [30, 40, 35, 50, 49, 60, 70,150,200,110,85,55], label: 'Karta Arizalari' },
        ]}
        xAxis={[{ scaleType: 'point', data: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul','Avg','Sen','Okt','Noy','Dek'] }]}
      />
    </div>
  );
};

export default StatusBarChart;

import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import useFetch from '../../hooks/useFetch';

const StatusPieChart = () => {
  const { data, loading, error } = useFetch('karta_turi');

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  // Backenddan kelgan datani formatlash
  const pieData = data.map((item, index) => ({
    id: index,
    label: item.Turi,
    value: parseInt(item.Soni),
  }));


  return (
    <div className="w-full p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md">
      <PieChart
        series={[
          {
            data: pieData,
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

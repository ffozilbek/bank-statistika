import React, { useState } from 'react';

const StatusSelect = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
    console.log('Tanlangan status:', event.target.value);
  };

  return (
    <div className="p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md">
      <label className="block text-center mb-4 cursor-pointer">
        Fitler turini tanlang
      </label>
      <select
        value={selected}
        onChange={handleChange}
        className="mt-1 p-3 block w-full rounded-md border-1 focus:border-dark-indigo outline-0"
      >
        <option value="" disabled>Tanlang...</option>
        <option value="all">Karta turi orqali</option>
        <option value="pending">Bank filiallari orqali</option>
      </select>
    </div>
  );
};

export default StatusSelect;

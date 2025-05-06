import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const CardApplicationForm = () => {
  const { data: filiallar, loading, error } = useFetch('bank_filiali');
  console.log(filiallar);
  const [pasport, setPasport] = useState('');
  const [branchId, setBranchId] = useState('');
  const [cardType, setCardType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasport("");
    setBranchId("");
    setCardType("");

  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Karta Ariza Formasi</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label className="block mb-1 font-medium">Pasport seriyasi</label>
        <input value={pasport}
            onChange={(e) => setPasport(e.target.value)} type="text" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='AD1234567' required/>
        </div>


        {/* Bank filliali select */}
        <div>
          <label className="block mb-1 font-medium">Bank filiali</label>
          {loading ? (
            <p>Yuklanmoqda...</p>
          ) : error ? (
            <p>Xatolik: {error}</p>
          ) : (
            <select
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Filial tanlang</option>
              {filiallar.map((f) => (
                <option key={f.id} value={f.id}>{f.Filial_nomi}</option>
              ))}
            </select>
          )}
        </div>

        {/* Karta turi select */}
        <div>
          <label className="block mb-1 font-medium">Karta turi</label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Karta turini tanlang</option>
            <option value="Humo">Humo</option>
            <option value="UzCard">UzCard</option>
            <option value="Visa">Visa</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          onClick={()=> submitHandler()}
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default CardApplicationForm;

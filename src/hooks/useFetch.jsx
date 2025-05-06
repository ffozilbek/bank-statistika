import { useEffect, useState } from 'react';

const useFetch = (tableName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tableName) return;

    setLoading(true);
    fetch(`http://localhost:5000/data/${tableName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Maʼlumotni olishda xatolik yuz berdi');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tableName]);

  return { data, loading, error };
};

export default useFetch;

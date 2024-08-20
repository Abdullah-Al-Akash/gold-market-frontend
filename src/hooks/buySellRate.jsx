// useFetchData.js
import { useState, useEffect } from "react";

const useCurrentRate = (url = 'https://gold-market-backend.onrender.com/buy-sell-rate') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if `url` changes

  return { data, loading, error };
};

export default useCurrentRate;

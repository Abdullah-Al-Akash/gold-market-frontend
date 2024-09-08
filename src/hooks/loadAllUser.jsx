// useFetchData.js
import { useState, useEffect } from "react";

const loadAllUser = (url = 'https://gold-market-backend.onrender.com/users') => {
  const [users, setUsers] = useState(null);
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
        setUsers(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if `url` changes

  return { users, loading, error };
};

export default loadAllUser;

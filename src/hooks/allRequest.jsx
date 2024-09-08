import { useEffect, useState } from "react";

const allRequest = () => {
  const url = `https://gold-market-backend.onrender.com/request`;
  const [request, setRequest] = useState([]);
  const [requestLoading, setRequestLoading] = useState(true);
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        // Check if `result` is an array
        if (Array.isArray(result)) {
          // Sort the result by `serial` in descending order
          const sortedResult = result.sort((a, b) => (b?.serial || 0) - (a?.serial || 0));
          setRequest(sortedResult);
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        setRequestError(error.message || "An error occurred");
      } finally {
        setRequestLoading(false);
      }
    };

    fetchData();
  }, [url,request]); // Dependency array is fine as `url` does not change

  return { request, requestLoading, requestError, requestLength: request.length };
};

export default allRequest;

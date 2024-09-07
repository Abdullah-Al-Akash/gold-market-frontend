import { useEffect, useState } from "react";

const allRequest = () => {
  const url = `http://localhost:5000/request`;
  const [request, setRequest] = useState(null);
  const [requestLoading, setRequestLoading] = useState(true);
  const [requestError, setRequestError] = useState(null);
  const [requestLength, setRequestLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setRequest(result);
        setRequestLength(result?.length);
      } catch (error) {
        setRequestError(error);
      } finally {
        setRequestLoading(false);
      }
    };

    fetchData();
  }, [request]); // Re-run the effect if `url` changes

  return { request, requestLoading, requestError, requestLength };
};

export default allRequest;

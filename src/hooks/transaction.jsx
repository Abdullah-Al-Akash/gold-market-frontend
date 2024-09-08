import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const transaction = () => {
    const {user} = useContext(AuthContext);
    const url = `https://gold-market-backend.onrender.com/transaction?email=${user?.email}`;
    const [tHistory, setTHistory] = useState(null);
    const [tLoading, setTLoading] = useState(true);
    const [tError, setTError] = useState(null);
    const[tHistoryLength, setTHistoryLength] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setTHistory(result);
          setTHistoryLength(result?.length);
        } catch (error) {
            setTError(error);
        } finally {
            setTLoading(false);
        }
      };
  
      fetchData();
    }, [url]); // Re-run the effect if `url` changes
  
    return { tHistory, tError, tLoading,tHistoryLength };
};

export default transaction;
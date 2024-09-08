import { useEffect, useState } from "react";

const currentUser = (email) => {
const url = `http://localhost:5000/user?email=${email}`
  const [CUser, setCUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCUser(result);
      } catch (error) {
        setUserError(error);
      } finally {
        setUserLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if `url` changes

  return { CUser, userLoading, userError };
};

export default currentUser;

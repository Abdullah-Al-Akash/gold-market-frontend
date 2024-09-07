import React, { useEffect, useState } from "react";
import useCurrentRate from "../../../hooks/buySellRate";
import Loading from "../../Loading/Loading";

const Report = () => {
  const [totalVault, setTotalVault] = useState(null);
  const [inTermsOfGold, setInTermsOfGold] = useState(null);
  const [inTermsOfCash, setInTermsOfCash] = useState(null);
  const [earningComission, setEarningCommision] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data } = useCurrentRate();
  const userBuyRate = parseFloat(data?.userBuyRate);

  useEffect(() => {
    const fetchTotalVault = async () => {
      try {
        // Fetch the totalVault from the backend API
        const response = await fetch("https://gold-market-backend.onrender.com/adminReport");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTotalVault(data?.totalVault);
        setInTermsOfGold(data?.totalVault * 0.5);
        setInTermsOfCash(data?.totalVault * 0.5 * userBuyRate);
        setEarningCommision(data?.totalVault * 0.02 * userBuyRate);
      } catch (err) {
        setError("Failed to fetch total vault amount.");
        console.error("Error fetching totalVault:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalVault();
  }, [totalVault]); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h3 className="text-center my-8 text-4xl font-semibold brand-color">
        Admin Report
      </h3>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
        <div data-aos="fade-right" className="h-[250px]  bg-yellow-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">Total Vault</h3>
            <h3 className="text-3xl font-semibold text-black">
              {totalVault} Gram
            </h3>
          </div>
        </div>
        <div data-aos="fade-left" className="h-[250px]  bg-green-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              In Terms of Gold
            </h3>
            <h3 className="text-3xl font-semibold text-black">
              {inTermsOfGold} Gram
            </h3>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[250px]  bg-green-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              In Terms of Cash
            </h3>
            <h3 className="text-3xl font-semibold text-black">
              {inTermsOfCash} BDT
            </h3>
          </div>
        </div>
        <div data-aos="fade-left" className="h-[250px]  bg-yellow-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              Earning <span className="text-sm">(2% Commision)</span>
            </h3>
            <h3 className="text-3xl font-semibold text-black">
              {earningComission} BDT
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

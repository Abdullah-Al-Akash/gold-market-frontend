import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  console.log(user);
  const handleSell = (e) => {
    const amountInGm = e.target.value;
    const goldValue = parseFloat(amountInGm * 8620);
    console.log(goldValue);
    const sellValue = goldValue * 0.98;
    setAmount(goldValue);
    setSellAmount(sellValue);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h3>Welcome to your Profile</h3>
        <h2>Login email: {user?.email}</h2>
        <div className="my-10">
          <div className="grid grid-cols-2 gap-4">
            <h3 className="text-white text-xl font-semibold underline">
              Today's 22 Karet Gold rate/gm
            </h3>
            <h3 className="brand-color text-xl font-semibold">8620 BDT</h3>
            <h3 className="text-white text-xl font-semibold underline">
              Today's 22 Karet Gold rate/vori
            </h3>
            <h3 className="brand-color text-xl font-semibold">100544 BDT</h3>
          </div>
          <div className="my-10"></div>
          <label className="input input-bordered flex items-center gap-2">
            <span className="brand-color">My Vault</span>
            <input
              onChange={handleSell}
              type="number"
              className="grow ms-10"
              placeholder="Enter Amount in Gram"
              min="0"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color">Today's Value</span>
            <input
              type="text"
              className="grow ms-10"
              placeholder=""
              min="0"
              value={amount.toLocaleString() + " BDT"}
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color">Sell Price</span>
            <input
              type="text"
              className="grow ms-10"
              placeholder=""
              min="0"
              value={sellAmount.toLocaleString() + " BDT"}
              readOnly
            />
          </label>
        </div>
        <div className="my-10">
        <button className="btn btn-warning mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Buy More
              </button>
              <button className="btn btn-warning mt-4 ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Sell More
              </button>
              <button className="btn btn-warning mt-4 md:ms-2 ms-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Transaction History
              </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

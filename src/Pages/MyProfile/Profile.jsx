import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Routing from "../InteractionPage/Routing";
import AdminPanel from "../AdminPanel/AdminPanel";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  console.log(user);
  const handleSell = (e) => {
    const amountInGm = e.target.value;
    const goldValue = parseFloat(amountInGm * 8620);
    const sellValue = goldValue * 0.98;
    setAmount(goldValue);
    setSellAmount(sellValue);
  };
  if(user?.email == "akash@gmail.com"){
    return <AdminPanel></AdminPanel>
  }
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
        <Routing></Routing>
      </div>
    </div>
  );
};

export default Profile;

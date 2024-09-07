import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Routing from "../InteractionPage/Routing";
import { useNavigate } from "react-router-dom";
import { checkAdmin } from "../../hooks/checkAdmin";
import { adminRouting } from "../AdminPanel/AdminRouting";
import currentUser from "../../hooks/currentUser";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { loading, user } = useContext(AuthContext);
  const UserDetails = currentUser(user?.email);
  console.log(UserDetails);
  const {CUser, userLoading} = UserDetails;
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
  if (checkAdmin(user?.email)) {
    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <h3 className="text-5xl text-center leading-relaxed">
              Welcome <br /> To <br />{" "}
              <span className="brand-color text-5xl">Gold Market</span> <br />{" "}
              Admin Panel
            </h3>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {adminRouting}
          </div>
        </div>
      </div>
    );
  }
  if(userLoading){
    return <Loading></Loading>
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h3>Welcome to {CUser?.name}</h3>
        <h2>Email: {CUser?.email}</h2>
        <h2>Phone: {CUser?.phoneNumber}</h2>
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
            <span className="brand-color">My Vault(gram)</span>
            <input
              onChange={handleSell}
              type="number"
              className="grow ms-10"
              placeholder="Enter Amount in Gram"
              min="0"
              value={CUser?.myVault}
              readOnly
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

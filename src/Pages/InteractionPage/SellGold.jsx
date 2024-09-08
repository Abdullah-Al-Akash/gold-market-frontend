import React, { useContext, useEffect, useState } from "react";
import Routing from "./Routing";
import Swal from "sweetalert2";
import useCurrentRate from "../../hooks/buySellRate";
import currentUser from "../../hooks/currentUser";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../Loading/Loading";

const SellGold = () => {
  const { user } = useContext(AuthContext);
  const { CUser } = currentUser(user?.email);
  const [amountInBdt, setAmountInBdt] = useState(null);
  const [amountInGm, setAmountInGm] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const { data, loading } = useCurrentRate();

  console.log(data?.deliveryCharge);
  const [interactionBtn, setInteractionBtn] = useState(false);

  const handleBuyInBdt = (e) => {
    let amountInGm = parseFloat(e.target.value);
    setAmountInGm(amountInGm);
    if (amountInGm < 0 || amountInGm > 80) {
      setAmountInGm(null);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter Valid Amount!",
        showConfirmButton: false,
        timer: 1500,
      });
      amountInGm = null;
    }
    setAmountInBdt(amountInGm * parseFloat(data?.userSellRate));
    setTotalAmount(
      amountInGm * parseFloat(data?.userSellRate) +
        parseFloat(data?.deliveryCharge)
    );
  };

  useEffect(() => {
    if (amountInGm > 0 && amountInGm <= 80) {
      setInteractionBtn(true);
    } else {
      setInteractionBtn(false);
    }
  }, [amountInGm]);
  // Buy Request
  const requestToBuy = async () => {
    const date = new Date(); // Months are zero-based in JavaScript (6 = July)
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
    const goldData = {
      CUser,
      amountInBdt: `${amountInBdt}`,
      amountInGm: amountInGm,
      deliveryCharge: `${parseFloat(data?.deliveryCharge)}`,
      totalAmount: `${totalAmount}`,
      requestType: "Sell",
      status: "Pending",
      date: formattedDate,
    };

    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });

      // If confirmed, make the POST request
      if (result.isConfirmed) {
        // Condition is greater or less from myvault:
        if(CUser?.myVault < amountInGm){
          return Swal.fire({
            title: "Error",
            text: "Insuficiant Amount of Gold",
            icon: "error",
          })
        }
        const response = await fetch("http://localhost:5000/buy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
          body: JSON.stringify(goldData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Show success alert
        await Swal.fire({
          title: "Successfully Sent Your Request",
          text: "Please Wait for Admin Response!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error making POST request:", error);

      // Show error alert if request fails
      await Swal.fire({
        title: "Error",
        text: "There was an error sending your request. Please try again.",
        icon: "error",
      });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h3 className="brand-color text-2xl font-semibold">Sell Your Gold</h3>
        <h3 className="mt-2 brand-color">
          (Max Amount 2,50,000 BDT and 25 Gram)
        </h3>
        <div className="my-10">
          <label className="input input-bordered flex items-center gap-2">
            <span className="brand-color w-1/2">
              Enter amount of Gold(gram)={" "}
            </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder="Max 80 Gm"
              min="0"
              max="80"
              onChange={handleBuyInBdt}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color w-1/2">You will get(BDT) = </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder=""
              min="0"
              max="250000"
              value={amountInBdt}
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color w-1/2">Delivery Charge(BDT) = </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder="Max 25 Gm"
              min="0"
              max="25"
              value={data?.deliveryCharge}
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color w-1/2">Total Charge(BDT) = </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder=""
              min="0"
              max="25"
              value={totalAmount}
              readOnly
            />
          </label>
          <div className="flex justify-end">
            <button
              onClick={requestToBuy}
              disabled={!interactionBtn}
              type="button"
              className="btn btn-success btn-wide mt-2 text-white text-xl font-normal"
            >
              Request to Sell
            </button>
          </div>
        </div>
        <Routing></Routing>
      </div>
    </div>
  );
};

export default SellGold;

import React, { useEffect, useState } from "react";
import Routing from "./Routing";
import Swal from "sweetalert2";

const BuyGold = () => {
  const [amountInBdt, setAmountInBdt] = useState(null);
  const [amountInGm, setAmountInGm] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [charge, setCharge] = useState(500);
  const [interactionBtn, setInteractionBtn] = useState(false);
  const handleBuyInBdt = (e) => {
    let amountInBdt = parseFloat(e.target.value);
    setAmountInBdt(amountInBdt)
    if (amountInBdt < 0 || amountInBdt > 250000) {
      setAmountInBdt(null);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter Valid Amount!",
        showConfirmButton: false,
        timer: 1500,
      });
      amountInBdt = "";
    }
    setAmountInGm(amountInBdt / 8620);
    setTotalAmount(amountInBdt + 500);
  };
  //   const handleBuyInGm = (e) => {
  //     const amountInGm = parseFloat(e.target.value);
  //     setAmountInBdt(amountInGm*8620)
  //   };
  useEffect(() => {
    console.log(amountInBdt);
    if (amountInBdt > 0 || amountInBdt < 250000) {
      setInteractionBtn(true);
    } else {
      setInteractionBtn(false);
    }
  }, [amountInBdt]);
  // Buy Request
  const requestToBuy = async () => {
    const goldData = {
      amountInBdt: `${amountInBdt}BDT`,
      charge: `${charge}BDT`,
      totalAmount: `${totalAmount}BDT`,
      requestType: "Buy",
      status: "Pending"
    }
    console.log(goldData);
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
        const response = await fetch('http://localhost:5000/buy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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
      console.error('Error making POST request:', error);
  
      // Show error alert if request fails
      await Swal.fire({
        title: "Error",
        text: "There was an error sending your request. Please try again.",
        icon: "error",
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h3 className="brand-color text-2xl font-semibold">Buy Your Gold</h3>
        <h3 className="mt-2 brand-color">
          (Max Amount 2,50,000 BDT and 25 Gram)
        </h3>
        <div className="my-10">
          <label className="input input-bordered flex items-center gap-2">
            <span className="brand-color w-1/2">Enter Amount in BDT = </span>
            <input
              onChange={handleBuyInBdt}
              type="number"
              className="grow ms-10"
              placeholder="Max 2.5 Lac"
              min="0"
              max="250000"
              value={amountInBdt}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color w-1/2">You Will Get Gold(gram)= </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder="Max 25 Gm"
              min="0"
              max="25"
              value={`${amountInGm}`}
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
              value={charge}
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-2">
            <span className="brand-color w-1/2">Total Charge(BDT) = </span>
            <input
              type="number"
              className="grow ms-10"
              placeholder="Max 25 Gm"
              min="0"
              max="25"
              value={totalAmount}
              readOnly
            />
          </label>
          <div className="flex justify-end">
            <button onClick={requestToBuy} className="btn btn-success btn-wide mt-2 text-white text-xl font-normal">
              Request to Buy
            </button>
          </div>
        </div>
        <Routing></Routing>
      </div>
    </div>
  );
};

export default BuyGold;

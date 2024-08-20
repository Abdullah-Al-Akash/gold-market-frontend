import React, { useContext } from "react";
import Swal from "sweetalert2";
import useCurrentRate from "../../../hooks/buySellRate";
import currentUser from "../../../hooks/currentUser";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const UpdateGoldRate = () => {
  const { data, loading, error } = useCurrentRate();
  const{user} = useContext(AuthContext);
  const{CUser, userLoading, userError } = currentUser(user.email)
  console.log(CUser,userLoading, userError);
  const navigate = useNavigate();
  if(userLoading){
    return <Loading></Loading>
  }
  if(CUser.email !== "akash@gmail.com"){
    navigate("/")
  }
  
  const currentRate = Array.isArray(data) && data.length > 0 ? data[0] : null;
  // Handle form submission
  const updateData = async (event) => {
    event.preventDefault();

    // Access form values
    const form = event.target;
    const userBuyRate = form.elements.buyRate.value;
    const userSellRate = form.elements.sellRate.value;
    const deliveryCharge = form.elements.deliveryCharge.value;

    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure you want to update?",
        text: "This action will modify the existing data.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });

      // If confirmed, make the PUT request
      if (result.isConfirmed) {
        const updatedData = {
          userBuyRate,
          userSellRate,
          deliveryCharge,
        };
        console.log(updatedData);

        // Replace 'id' with the actual ID if necessary
        const response = await fetch(
          `https://gold-market-backend.onrender.com/buy-sell-rate/${currentRate._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Show success alert
        await Swal.fire({
          title: "Successfully Updated",
          text: "Your data has been updated successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error making update request:", error);

      // Show error alert if request fails
      await Swal.fire({
        title: "Error",
        text: "There was an error updating your data. Please try again.",
        icon: "error",
      });
    }
  };

  // Display loading or error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3 className="text-2xl font-semibold text-center">
        Update Buy and Sell Rate
      </h3>
      <form onSubmit={updateData} className="my-10">
        <label className="input input-bordered flex items-center gap-2">
          <span className="brand-color">User Buy Rate </span>
          <input
            name="buyRate"
            placeholder="per gram"
            type="number"
            className="grow ms-10"
            min="0"
            defaultValue={currentRate?.userBuyRate} // Use defaultValue instead of value for controlled input
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-2">
          <span className="brand-color">User Sell Rate </span>
          <input
            name="sellRate"
            placeholder="per gram"
            type="number"
            className="grow ms-10"
            min="0"
            defaultValue={currentRate?.userSellRate} // Use defaultValue instead of value for controlled input
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-2">
          <span className="brand-color">Delivery Charge </span>
          <input
            name="deliveryCharge"
            type="number"
            className="grow ms-10"
            placeholder=""
            min="0"
            defaultValue={currentRate?.deliveryCharge} // Use defaultValue instead of value for controlled input
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-success btn-wide mt-2 text-white text-xl font-normal"
          >
            Update Rate
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateGoldRate;

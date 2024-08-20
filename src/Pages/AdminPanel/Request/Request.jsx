import React from "react";
import allRequest from "../../../hooks/allRequest";
import Loading from "../../Loading/Loading";

const Request = () => {
  const { request, requestLoading, requestError, requestLength } = allRequest();
  if (requestLoading) {
    return <Loading></Loading>;
  }
  const approveBtn = async (id) => {
    try {
        const response = await fetch(`https://gold-market-backend.onrender.com/request/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: "Approved" }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Status updated successfully:', result);
    } catch (error) {
        console.error('Error updating status:', error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <div
          className=""
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <h3 className="brand-color text-2xl font-semibold">
            All Request
          </h3>

          <div className="overflow-x-auto px-4 mx-auto my-10 lg:my-10">
            <table className="table mx-auto">
              {/* head */}
              <thead>
                <tr className="bg-warning">
                  <th></th>
                  <th className=" text-black">Date</th>
                  <th className=" text-black">Name</th>
                  <th className=" text-black">Email</th>
                  <th className=" text-black">Phone</th>
                  <th className=" text-black">Type</th>
                  <th className=" text-black">Gold Amount</th>
                  <th className=" text-black">Total Payment</th>
                  <th className=" text-black">Status</th>
                  <th className=" text-black">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {requestLength == 0 ? (
                  <div>
                    <h2>You have no transaction history!</h2>
                  </div>
                ) : (
                  request?.map((r, index) => (
                    <tr key={r._id} className="border-warning">
                      <th className=" text-white">{index+1}</th>
                      <td className="text-white">{r?.date}</td>
                      <td className="text-white">{r?.CUser?.name}</td>
                      <td className="text-white">{r?.CUser?.email}</td>
                      <td className="text-white">{r?.CUser?.phoneNumber}</td>
                      <td
                        className={
                          r?.requestType === "Buy"
                            ? "text-green-400"
                            : "text-yellow-300"
                        }
                      >
                        {r?.requestType}
                      </td>
                      <td className="text-white">
                        {typeof r?.amountInGm === "number"
                          ? r?.amountInGm.toFixed(3) // Format amountInGm to 2 decimal places
                          : "N/A"}{" "}
                        Gm
                      </td>
                      <td className="text-white">
                        {
                          r?.totalAmount // Format totalAmount to 2 decimal places
                        }
                        BDT
                      </td>
                      <td
                        className={
                          r?.status === "Pending"
                            ? "text-red-300"
                            : "text-green-400"
                        }
                      >
                        {
                          r?.status // Format totalAmount to 2 decimal places
                        }
                      </td>
                      <td className="text-white">
                        <button
                          onClick={() => approveBtn(r?._id)}
                          className="btn-sm btn font-thin btn-success"
                          disabled={r.status == "Approved"}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;

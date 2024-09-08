import React, { useState, useEffect } from "react";
import allRequest from "../../../hooks/allRequest";
import Loading from "../../Loading/Loading";

const Request = () => {
  const { request, requestLoading, requestError } = allRequest();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Rendered with searchTerm:", searchTerm);
  }, [searchTerm]);

  if (requestLoading) {
    return <Loading />;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRequests =
    request?.filter((r) => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      return (
        r?.CUser?.name?.toLowerCase().includes(lowercasedSearchTerm) ||
        r?.CUser?.email?.toLowerCase().includes(lowercasedSearchTerm) ||
        r?.CUser?.phoneNumber?.toLowerCase().includes(lowercasedSearchTerm) ||
        r?.date?.toLowerCase().includes(lowercasedSearchTerm)
      );
    }) || [];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="800">
          <h3 className="brand-color text-2xl font-semibold my-6">All Request</h3>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search by email, name, phone, or date"
              className="input input-bordered w-full max-w-md"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="overflow-x-auto w-full px-4 mx-auto my-10 lg:my-4 max-w-sm md:max-w-7xl">
            

            <table className="table mx-auto">
              <thead>
                <tr className="bg-warning">
                  <th></th>
                  <th className="text-black">Date</th>
                  <th className="text-black">Name</th>
                  <th className="text-black">Email</th>
                  <th className="text-black">Phone</th>
                  <th className="text-black">Type</th>
                  <th className="text-black">Gold Amount</th>
                  <th className="text-black">Total Payment</th>
                  <th className="text-black">Status</th>
                  <th className="text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="text-center text-white">
                      You have no transaction history!
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((r, index) => {
                    const amountInGm =
                      typeof r?.amountInGm === "number"
                        ? r?.amountInGm
                        : parseFloat(r?.amountInGm) || "N/A";
                    const totalAmount =
                      typeof r?.totalAmount === "number"
                        ? r?.totalAmount
                        : parseFloat(r?.totalAmount) || "N/A";

                    return (
                      <tr key={r._id} className="border-warning">
                        <th className="text-white text-xs">{index + 1}</th>
                        <td className="text-white text-xs">{r?.date}</td>
                        <td className="text-white text-xs">{r?.CUser?.name}</td>
                        <td className="text-white text-xs">
                          {r?.CUser?.email}
                        </td>
                        <td className="text-white text-xs">
                          {r?.CUser?.phoneNumber}
                        </td>
                        <td
                          className={
                            r?.requestType === "Buy"
                              ? "text-green-400"
                              : "text-yellow-300"
                          }
                        >
                          {r?.requestType}
                        </td>
                        <td className="text-white text-xs">
                          {amountInGm !== "N/A"
                            ? amountInGm.toFixed(3) // Format amountInGm to 3 decimal places
                            : "N/A"}{" "}
                          Gm
                        </td>
                        <td className="text-white text-xs">
                          {totalAmount !== "N/A"
                            ? totalAmount.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            : "N/A"}{" "}
                          Tk
                        </td>
                        <td
                          className={
                            r?.status === "Pending"
                              ? "text-red-300"
                              : "text-green-400"
                          }
                        >
                          {r?.status}
                        </td>
                        <td className="text-white text-xs">
                          <button
                            onClick={() =>
                              approveBtn(
                                r?._id,
                                r?.CUser?._id,
                                r?.requestType,
                                r?.amountInGm,
                                r?.amountInBdt
                              )
                            }
                            className="btn-sm btn font-thin btn-success"
                            disabled={r.status === "Approved"}
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    );
                  })
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

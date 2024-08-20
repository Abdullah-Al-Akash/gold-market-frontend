import React from "react";
import Routing from "./Routing";
import transaction from "../../hooks/transaction";
import Loading from "../Loading/Loading";

const Transaction = () => {
  const { tHistory, tLoading, tHistoryLength } = transaction();
  console.log(tHistoryLength);
  if (tLoading) {
    return <Loading></Loading>;
  }
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
            Transaction History
          </h3>

          <div className="overflow-x-auto px-4 mx-auto my-10 lg:my-10">
            <table className="table mx-auto">
              {/* head */}
              <thead>
                <tr className="bg-warning">
                  <th></th>
                  <th className="md:text-xl text-lg text-black">Date</th>
                  <th className="md:text-xl text-lg text-black">Type</th>
                  <th className="md:text-xl text-lg text-black">Gold Amount</th>
                  <th className="md:text-xl text-lg text-black">
                    Total Payment
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {tHistoryLength == 0 ? (
                  <div>
                    <h2>You have no transaction history!</h2>
                  </div>
                ) : (
                  tHistory?.map(history => (
                    <tr key={history._id} className="border-warning">
                        <th className=" text-white">1</th>
                        <td className="brand-color">{history?.date}</td>
                        <td className="text-white">{history?.requestType}</td>
                        <td className="text-white">
                            {typeof history?.amountInGm === 'number'
                                ? history?.amountInGm.toFixed(3) // Format amountInGm to 2 decimal places
                                : 'N/A'} Gm
                        </td>
                        <td className=" brand-color">
                            {history?.totalAmount // Format totalAmount to 2 decimal places
                               } BDT
                        </td>
                    </tr>
                ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Routing></Routing>
      </div>
    </div>
  );
};

export default Transaction;

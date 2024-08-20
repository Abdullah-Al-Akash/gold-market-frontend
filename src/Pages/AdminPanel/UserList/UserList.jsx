import React from "react";
import loadAllUser from "../../../hooks/loadAllUser";
import Loading from "../../Loading/Loading";

const UserList = () => {
  const { users, loading, error } = loadAllUser();
  // Display loading or error state
  console.log(users);
  if (loading) return <Loading></Loading>;
  if (error) return <p>Error: {error.message}</p>;
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
            All Users
          </h3>

          <div className="overflow-x-auto px-4 mx-auto my-10 lg:my-10">
            <table className="table mx-auto">
              {/* head */}
              <thead>
                <tr className="bg-warning">
                  <th></th>
                  <th className=" text-black">Name</th>
                  <th className=" text-black">Email</th>
                  <th className=" text-black">Phone</th>
                  <th className=" text-black">Reference ID</th>
                  <th className=" text-black">User ID</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {users?.length == 0 ? (
                  <div>
                    <h2>You have no transaction history!</h2>
                  </div>
                ) : (
                  users?.map((user, index) => (
                    <tr key={user._id} className="border-warning">
                      <th className=" text-white">{index+1}</th>
                      <td className="text-white">{user?.name}</td>
                      <td className="text-white">{user?.email}</td>
                      <td className="text-white">{user?.phoneNumber}</td>
                      <td className="text-white">{user?.referenceId}</td>
                      <td className="text-white">{user?._id}</td>
                      
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

export default UserList;

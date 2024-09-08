import React, { useState, useEffect } from "react";
import loadAllUser from "../../../hooks/loadAllUser";
import Loading from "../../Loading/Loading";

const UserList = () => {
  const { users, loading, error } = loadAllUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Filter users based on search query
    const query = searchQuery.toLowerCase();
    const filtered = users?.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.phoneNumber.includes(query)
    );
    setFilteredUsers(filtered || []);
  }, [searchQuery, users]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="text-center">
        <div
          className=""
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <h3 className="brand-color text-2xl font-semibold my-6">All Users</h3>

          {/* Search Bar */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search by name, email, or phone number..."
              className="input input-bordered w-full max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto px-4 mx-auto my-10 lg:my-10 max-w-sm md:max-w-7xl">
            <table className="table mx-auto">
              {/* head */}
              <thead>
                <tr className="bg-warning">
                  <th></th>
                  <th className="text-black">Name</th>
                  <th className="text-black">Email</th>
                  <th className="text-black">Phone</th>
                  <th className="text-black">Reference ID</th>
                  <th className="text-black">User ID</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-white">
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr key={user._id} className="border-warning">
                      <th className="text-white">{index + 1}</th>
                      <td className="text-white">{user.name}</td>
                      <td className="text-white">{user.email}</td>
                      <td className="text-white">{user.phoneNumber}</td>
                      <td className="text-white">{user.referenceId}</td>
                      <td className="text-white">{user._id}</td>
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

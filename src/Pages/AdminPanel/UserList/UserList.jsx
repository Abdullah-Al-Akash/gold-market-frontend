import React from "react";
import loadAllUser from "../../../hooks/loadAllUser";

const UserList = () => {
  const { users, loading, error } = loadAllUser();
  // Display loading or error state
  console.log(users);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h3>All User</h3>
    </div>
  );
};

export default UserList;

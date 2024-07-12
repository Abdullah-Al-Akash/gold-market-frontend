import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h3>Welcome to your Profile</h3>
        <h2>Login email: {user?.email}</h2>
      </div>
    </div>
  );
};

export default Profile;

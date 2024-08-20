import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  console.log(user);
  if (loading) return <>loading...</>;

  else if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;

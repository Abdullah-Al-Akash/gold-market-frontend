import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const ProvateRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (user?.email) {
    return children;
  }
  else{
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProvateRoute;

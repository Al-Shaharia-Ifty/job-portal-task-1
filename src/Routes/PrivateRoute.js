import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase.init";
import Loading from "../Shared/Loading";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    signOut(auth);
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;

//i want to create a protected route that will only be accessible to admin

import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { getToken } from "../../utils/token.js";
import { useFetchCurrentUser } from "../Hooks/getUserData.js";

const ProtectedRoute = ({ element, ...rest }) => {
  const { data: user, isLoading } = useQuery("user", useFetchCurrentUser);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user || !getToken()) {
    return <Navigate to='/login' />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;

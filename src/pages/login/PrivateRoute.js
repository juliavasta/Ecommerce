import { Navigate } from "react-router-dom";

import { useAuthContext } from "context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? children : <Navigate to="/account/login" />;
}

export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/hook";

export const ProtectRoute = () => {
  const { user } = useAuthContext();

  return <>{user.id ? <Outlet /> : <Navigate to="/" />}</>;
};

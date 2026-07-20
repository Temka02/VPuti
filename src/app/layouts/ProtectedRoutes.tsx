import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../store";

export default function ProtectedRoutes() {
  const token = useSelector((state: RootState) => state.auth?.token);
  if (!token) {
    return <Navigate replace to="/login" />;
  }
  return <Outlet />;
}

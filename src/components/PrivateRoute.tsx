/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state: any) => state.user);

  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}

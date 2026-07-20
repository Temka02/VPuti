import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../../pages/HomePage";
import HotelPage from "../../pages/HotelPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProtectedRoutes from "../layouts/ProtectedRoutes";
import ProfilePage from "../../pages/ProfilePage";
import BookingPage from "../../pages/BookingPage";
import NotFoundPage from "../../pages/NotFoundPage";
import AuthRoutes from "../layouts/AuthRoutes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "hotels/:id", element: <HotelPage /> },

      {
        element: <AuthRoutes />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "profile", element: <ProfilePage /> },
          { path: "booking", element: <BookingPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

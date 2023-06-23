import UserLayout from "@/layout/UserLayout";
import Home from "@/pages/user/home";
import { RouteObject } from "react-router-dom";

const userRoutes: RouteObject = {
  path: "/",
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};

export default userRoutes;

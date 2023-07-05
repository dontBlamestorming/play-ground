import { RouteObject } from "react-router-dom";

import UserLayout from "@/layout/UserLayout";
import Home from "@/pages/user/home";
import SignInPage from "@/pages/user/sign-in";

const userRoutes: RouteObject = {
  path: "/",
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "sign-in",
      element: <SignInPage />,
    },
  ],
};

export default userRoutes;

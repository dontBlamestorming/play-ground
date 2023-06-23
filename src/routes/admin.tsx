import { RouteObject } from "react-router-dom";

import AdminLayout from "@/layout/AdminLayout";
import Home from "@/pages/admin/home";

const adminRoutes: RouteObject = {
  path: "/_admin",
  element: <AdminLayout />,
  children: [{ index: true, element: <Home /> }],
};

export default adminRoutes;

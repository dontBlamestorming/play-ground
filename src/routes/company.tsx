import CompanyLayout from "@/layout/CompanyLayout";
import { RouteObject } from "react-router-dom";

const companyRoutes: RouteObject = {
  path: "/_company",
  element: <CompanyLayout />,
};

export default companyRoutes;

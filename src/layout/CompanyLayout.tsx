import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CompanyLayout;

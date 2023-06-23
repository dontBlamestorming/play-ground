import { Outlet } from "react-router-dom";
import Header from "./user/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;

import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;

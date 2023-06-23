import { RouterProvider, createBrowserRouter } from "react-router-dom";

import userRoutes from "./routes/user";
import adminRoutes from "./routes/admin";
import companyRoutes from "./routes/company";
import Counter from "./components/Counter";

const router = createBrowserRouter([userRoutes, adminRoutes, companyRoutes]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Counter />
    </>
  );
};

export default App;

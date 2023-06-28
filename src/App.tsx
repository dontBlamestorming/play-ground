import { RouterProvider, createBrowserRouter } from "react-router-dom";

import userRoutes from "./routes/user";
import adminRoutes from "./routes/admin";
import companyRoutes from "./routes/company";
import Counter from "./components/Counter";

const router = createBrowserRouter([userRoutes, adminRoutes, companyRoutes]);

const App = () => {
  /**
   * ! 현재 eslint 종속되어있는 라이브러리들이 typescript 버전의 최신화가 되어있지 않아서 이슈가 발생하는걸로 생각됌
   * TODO: 나중에 pre-commit 업데이트 할 수 있으면 해서 lint 동작에서 error가 있는 경우에 commit 금지하게 설정하면 좋을 것 같음
   */

  return (
    <>
      <RouterProvider router={router} />
      <Counter />
    </>
  );
};

export default App;

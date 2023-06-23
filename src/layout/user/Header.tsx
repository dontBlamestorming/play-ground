import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex max-w-7xl fixed top-0 left-0 right-0 h-[88px] w-full border border-b border-bd items-center">
      <h1>보너스잡</h1>
      <nav>
        <ul className="flex">
          <li>
            <NavLink
              to="/recruit"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              전체 채용
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruit/production"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              생산/제조/조립
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruit/check"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              검사/포장
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruit/logis"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              자재/물류
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruit/service"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              서비스
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruit/build"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              건설/건축
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

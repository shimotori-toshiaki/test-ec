import { NavLink } from "react-router";
export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-500"
                }
              >
                トップ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="item-list"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-500"
                }
              >
                商品一覧
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

// DEPENDENCIES
// COMPONENTS
// STYLES
import { MdMenu } from "react-icons/md";
import "../assets/styles/component_styles/layouts.css";
import { useState } from "react";
import { Outlet } from "react-router";

const Layouts = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isAuth, setIsAuth] = useState(!false);

  const handleShowNav = () => setIsShowNav(!isShowNav);
  return (
    <>
      <header className="header flex relative">
        <h1 className="web-heading flex">
          <span>Nesting</span>
          <span>v.1.0</span>
        </h1>
        <button type="button" onClick={handleShowNav} className="btn-menu flex absolute">
          <MdMenu />
        </button>
        <nav className={`header-nav flex ${isShowNav || "hidden"}`}>
          <button type="button" className="btn-redirect">
            About
          </button>
          {isAuth ? (
            <>
              <button type="button" className="btn-redirect">
                Create
              </button>
              <button type="button" className="btn-redirect">
                Collection
              </button>
              <button type="button" className="btn-redirect">
                Profile
              </button>
              <button type="button" className="btn-redirect">
                Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn-redirect">
                Login
              </button>
              <button type="button" className="btn-redirect">
                Register
              </button>
            </>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layouts;

// DEPENDENCIES
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
// COMPONENTS

// STYLES
import "../assets/styles/component_styles/layouts.css";
import List from "./List";

const Layouts = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isAuth, setIsAuth] = useState(!false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleShowNav = () => setIsShowNav(!isShowNav);
  const buttonListCollection = [
    { is_auth: null, label: "about" },
    { is_auth: false, label: "login" },
    { is_auth: false, label: "register" },
    { is_auth: true, label: "create" },
    { is_auth: true, label: "collection" },
    { is_auth: true, label: "profile" },
    { is_auth: true, label: "logout" },
  ];
  const handleTitle = () => {
    if (pathname === "/") return "Home";

    return pathname
      .split("/")[1]
      .split("")
      .map((letter, letterIndex) => (letterIndex === 0 ? letter.toUpperCase() : letter.toLowerCase()))
      .join("");
  };
  return (
    <>
      <Helmet>
        <title>{`Nesting || ${handleTitle()}`}</title>
      </Helmet>

      <header className="header flex relative">
        <div className="web-heading flex">
          <h1>
            <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Nesting
            </NavLink>
          </h1>
          <span>V-1.0</span>
        </div>
        <button type="button" onClick={handleShowNav} className="btn-menu flex absolute">
          <MdMenu />
        </button>
        <nav className={`header-nav flex ${isShowNav || "hidden"}`}>
          {buttonListCollection.map(
            (value) =>
              (value.is_auth === isAuth || value.is_auth === null) && (
                <List
                  label={value.label}
                  className={pathname.includes(value.label) ? "highlight-list" : "normal"}
                  onClick={() => {
                    navigate(`/${value.label}`);
                    setIsShowNav(false);
                  }}
                />
              )
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layouts;

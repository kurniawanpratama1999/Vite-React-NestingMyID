// DEPENDENCIES
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Helmet } from "react-helmet";

// COMPONENTS
import { AuthContext } from "../../contexts/Contexts";
import Header from "../Header/Header";

const Layouts = () => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <>
      <Helmet>
        <title>{`Nesting My ID - Cukup Satu Tautan`}</title>
      </Helmet>

      <Header isAuth={isAuth} />

      <Outlet />
    </>
  );
};

export default Layouts;

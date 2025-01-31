// DEPENDENCIES
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Helmet } from "react-helmet";

// COMPONENTS
import { Header } from "@/Components";
import { AuthProvider, HookContext } from "@/Contexts";

const LayoutsSetting = () => {
  const { isAuth } = useContext(HookContext);
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

const Layouts = () => {
  return (
    <AuthProvider>
      <LayoutsSetting />
    </AuthProvider>
  );
};

export default Layouts;

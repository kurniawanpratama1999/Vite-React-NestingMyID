import { fetcher } from "@/Utils/fetcher";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { HookContext } from "@/Contexts";

const AuthProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const method = "GET";
    const net = "http://localhost:3000/api/v1/verify/auth";
    fetcher({ method, net })
      .then((res) => {
        setIsAuth(res.success);
      })
      .catch((err) => setIsAuth(false));
  }, [pathname]);

  return (
    <HookContext.Provider value={{ isAuth }}>{children}</HookContext.Provider>
  );
};

export default AuthProvider;

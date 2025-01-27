import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { fetcher, hit_api } from "@/Utils/fetcher";
import { HookContext } from "@/Contexts/CreateContext";

export const AuthProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const method = "GET";
    const net = "http://localhost:3000/api/v1/auth/is-auth";
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

export const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    const method = "GET";
    const net = "http://localhost:3000/api/v1/user/read-profile";
    hit_api({ method, net })
      .then((res) => {
        if (res.success) {
          setUserProfile(res.results);
        }
      })
      .catch((err) => {
        setUserProfile({});
      });
  }, [pathname]);

  return (
    <HookContext.Provider value={userProfile}>{children}</HookContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { fetcher, hit_api } from "../utils/fetcher";
import { useLocation } from "react-router";

export const AuthContext = createContext();
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

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>;
};

export const ProfileContext = createContext();
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

  return <ProfileContext.Provider value={userProfile}>{children}</ProfileContext.Provider>;
};

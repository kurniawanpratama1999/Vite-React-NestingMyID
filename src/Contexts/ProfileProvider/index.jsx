import { hit_api } from "@/Utils/fetcher";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { HookContext } from "@/Contexts";

const ProfileProvider = ({ children }) => {
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

export default ProfileProvider;

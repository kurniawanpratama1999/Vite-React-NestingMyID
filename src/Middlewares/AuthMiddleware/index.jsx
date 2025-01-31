import { useContext } from "react";
import { Navigate } from "react-router";
import { Container } from "@/Components";
import { AuthProvider, HookContext } from "@/Contexts";

const AuthSetting = ({ children }) => {
  const { isAuth } = useContext(HookContext);
  return isAuth === null ? (
    <Container className="flex jc-center ai-center">Loading</Container>
  ) : isAuth ? (
    children
  ) : (
    <Navigate to="/login" relative="path" />
  );
};

const AuthPage = ({ children }) => {
  return (
    <AuthProvider>
      <AuthSetting>{children}</AuthSetting>
    </AuthProvider>
  );
};

export default AuthPage;

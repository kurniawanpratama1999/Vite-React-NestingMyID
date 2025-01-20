import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Contexts";
import { Navigate } from "react-router";
import Container from "../../components/Container/Container";

const AuthPage = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth === null ? (
    <Container className="flex jc-center ai-center">Loading</Container>
  ) : isAuth ? (
    children
  ) : (
    <Navigate to="/login" relative="path" />
  );
};

export default AuthPage;

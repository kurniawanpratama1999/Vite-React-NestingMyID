import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Contexts";
import { Navigate } from "react-router";
import Container from "../components/Container";

const AuthPage = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {}, [isAuth]);
  return isAuth === null ? <Container>Loading</Container> : isAuth ? children : <Navigate to="/login" relative="path"/>;
};

export default AuthPage;

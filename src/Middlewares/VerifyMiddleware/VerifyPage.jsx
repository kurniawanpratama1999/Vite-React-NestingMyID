import { useContext } from "react";
import { ProfileContext } from "../../contexts/Contexts";
import Container from "../../components/Container/Container";

const VerifyPage = ({ children }) => {
  const { is_verify } = useContext(ProfileContext);
  return is_verify ? (
    children
  ) : (
    <Container className="flex jc-center ai-center">Please verify your account first</Container>
  );
};

export default VerifyPage;

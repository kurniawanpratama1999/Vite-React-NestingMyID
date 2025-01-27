import { useContext } from "react";
import { HookContext } from "@/Contexts/CreateContext";
import { Container } from "@/Components";
import { ProfileProvider } from "@/Contexts";

const VerifySetting = ({ children }) => {
  const { is_verify } = useContext(HookContext);
  return is_verify ? (
    children
  ) : (
    <Container className="flex jc-center ai-center">
      Please verify your account first
    </Container>
  );
};

const VerifyPage = ({ children }) => {
  return (
    <ProfileProvider>
      <VerifySetting>{children}</VerifySetting>
    </ProfileProvider>
  );
};

export default VerifyPage;

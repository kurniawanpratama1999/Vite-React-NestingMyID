import { useContext } from "react";
import { Container } from "@/Components";
import { ProfileProvider } from "@/Contexts";
import { HookContext } from "@/Contexts";

const VerifySetting = ({ children }) => {
  const { isVerify } = useContext(HookContext);
  return isVerify ? (
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

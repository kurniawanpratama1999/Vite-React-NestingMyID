import React, { useContext } from "react";
import { CheckUsernameContext } from "../../contexts/CustomContext/CustomContext";

const Nofitication_ForgetPassword = () => {
  const { email, username } = useContext(CheckUsernameContext);
  return (
    <Container>
      <p>
        Hai {username}, Kami mengirim kamu link ke email {email} untuk menggati password.
      </p>
      <p>Silakan check pesan masuk atau spam email kamu.</p>
    </Container>
  );
};

export default Nofitication_ForgetPassword;

import React from "react";
import { Container, Input, Button } from "@/Components";
import formStyles from "@/Components/Form/form";

const ChangeEmail = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="new_email" detail="New Email :" focus="blue" />
        <Input type="text" htmlFor="otp" detail="Input OTP :" focus="blue" />
        <Button label="Save New Email" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeEmail;

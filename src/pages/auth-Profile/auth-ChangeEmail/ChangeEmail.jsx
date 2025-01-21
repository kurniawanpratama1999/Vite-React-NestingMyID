import React from "react";
import Container from "../../../components/Container/Container";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ChangeEmail = () => {
  return (
    <Container>
      <Form>
        <Input htmlFor="new_email" detail="New Email :" focus="blue" />
        <Input type="text" htmlFor="otp" detail="Input OTP :" focus="blue" />
        <Button label="Save New Email" bgColor="blue" />
      </Form>
    </Container>
  );
};

export default ChangeEmail;

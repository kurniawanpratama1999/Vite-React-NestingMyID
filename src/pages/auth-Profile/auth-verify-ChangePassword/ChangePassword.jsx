import React from "react";
import Container from "../../../components/Container/Container";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ChangePassword = () => {
  return (
    <Container>
      <Form>
        <Input htmlFor="old_password" detail="Old Password :" focus="blue"/>
        <Input htmlFor="new_password" detail="New Password :" focus="blue"/>
        <Input htmlFor="confirm_new_password" detail="Confirm New Password" focus="blue"/>
        <Button label="Save Changes" bgColor="blue" />
      </Form>
    </Container>
  );
};

export default ChangePassword;

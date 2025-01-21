import React from "react";
import Container from "../../../components/Container/Container";
import Form from "../../../components/Form/Form";
import Input, { Checkbox } from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ChangeUsername = () => {
  return (
    <Container>
      <Form>
        <Input htmlFor="new_username" detail="New Username :" focus="blue" />
        <Input type="password" htmlFor="password" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save Changes" bgColor="blue" />
      </Form>
    </Container>
  );
};

export default ChangeUsername;

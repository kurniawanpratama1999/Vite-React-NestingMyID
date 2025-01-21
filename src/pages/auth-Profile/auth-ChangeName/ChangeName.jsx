import React from "react";
import Container from "../../../components/Container/Container";
import Form from "../../../components/Form/Form";
import Input, { Checkbox } from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ChangeName = () => {
  return (
    <Container>
      <Form>
        <Input htmlFor="new_name" detail="New Name :" focus="blue" />
        <Input htmlFor="new_name" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save New Name" bgColor="blue" />
      </Form>
    </Container>
  );
};

export default ChangeName;

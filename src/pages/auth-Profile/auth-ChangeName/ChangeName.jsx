import React from "react";
import Container from "../../../components/Container/Container";
import Input, { Checkbox } from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import formStyles from "../../../components/Form/form";

const ChangeName = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="new_name" detail="New Name :" focus="blue" />
        <Input htmlFor="new_name" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save New Name" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeName;

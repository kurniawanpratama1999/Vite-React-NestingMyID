import React from "react";
import Container from "../../../components/Container/Container";
import Input, { Checkbox } from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import formStyles from "../../../components/Form/form";

const ChangeUsername = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="new_username" detail="New Username :" focus="blue" />
        <Input type="password" htmlFor="password" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save Changes" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeUsername;

import React from "react";
import { Container, Input, Button } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const ChangeUsername = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="new_username" detail="New Username :" focus="blue" />
        <Input
          type="password"
          htmlFor="password"
          detail="Password :"
          focus="blue"
        />
        <Checkbox htmlFor="show-password" />
        <Button label="Save Changes" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeUsername;

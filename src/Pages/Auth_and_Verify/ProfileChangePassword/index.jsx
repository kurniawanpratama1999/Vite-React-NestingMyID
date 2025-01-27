import React from "react";
import { Container, Input, Button } from "@/Components";
import formStyles from "@/Components/Form/form";

const ChangePassword = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="old_password" detail="Old Password :" focus="blue" />
        <Input htmlFor="new_password" detail="New Password :" focus="blue" />
        <Input
          htmlFor="confirm_new_password"
          detail="Confirm New Password"
          focus="blue"
        />
        <Button label="Save Changes" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangePassword;

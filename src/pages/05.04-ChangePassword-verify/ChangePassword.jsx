import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "../../assets/styles/page_styles/05.04-ChangePassword/changePassword.css";

const ChangePassword = () => {
  return (
    <Container id="changePassword" className="grid">
      <Form id="form-changePassword" className="grid">
        <Input htmlFor="old_password">
          <h3>
            Old Password <span className="star-red">*</span>
          </h3>
        </Input>
        <Input htmlFor="new_password">
          <h3>
            New Password <span className="star-red">*</span>
          </h3>
        </Input>
        <Button label="Save Changes" className="bg-green" />
      </Form>
    </Container>
  );
};

export default ChangePassword;

import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "../../assets/styles/page_styles/05.03-ChangeEmail/changeEmail.css";

const ChangeEmail = () => {
  return (
    <Container id="changeEmail" className="grid">
      <Form id="form-changeEmail" className="grid">
        <Input htmlFor="old_email">
          <h3>
            Old Email <span className="star-red">*</span>
          </h3>
        </Input>
        <Input htmlFor="new_email">
          <h3>
            New Email <span className="star-red">*</span>
          </h3>
        </Input>
        <Button label="Save Changes" className="bg-green" />
      </Form>
    </Container>
  );
};

export default ChangeEmail;

import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "../../assets/styles/page_styles/05.02-ChangeUsername/changeUsername.css";

const ChangeUsername = () => {
  return (
    <Container id="changeUsername" className="grid">
      <Form id="form-changeUsername" className="grid">
        <Input htmlFor="old_username">
          <h3>
            Old Name <span className="star-red">*</span>
          </h3>
        </Input>
        <Input htmlFor="new_username">
          <h3>
            New Name <span className="star-red">*</span>
          </h3>
        </Input>
        <Button label="Save Changes" className="bg-green" />
      </Form>
    </Container>
  );
};

export default ChangeUsername;

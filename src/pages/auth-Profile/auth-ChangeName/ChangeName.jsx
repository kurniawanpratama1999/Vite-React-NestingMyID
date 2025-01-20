import React from "react";
import Container from "../../../components/Container/Container";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const ChangeName = () => {
  return (
    <Container id="changeName" className="grid">
      <Form id="form-changeName" className="grid">
        <Input htmlFor="old_name">
          <h3>
            Old Name <span className="star-red">*</span>
          </h3>
        </Input>
        <Input htmlFor="new_name">
          <h3>
            New Name <span className="star-red">*</span>
          </h3>
        </Input>
        <Button label="Save Changes" className="bg-green" />
      </Form>
    </Container>
  );
};

export default ChangeName;

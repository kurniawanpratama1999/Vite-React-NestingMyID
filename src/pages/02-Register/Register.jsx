import { NavLink } from "react-router";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Form from "../../components/Form";
import '../../assets/styles/page_styles/02-Register/register.css'

const Register = () => {
  return (
    <Container className="flex jc-center ai-center relative">
      <Form id='form-register'>
        <Input type="text" htmlFor="display_name">
          <h3>Your Name *</h3>
        </Input>
        <Input type="text" htmlFor="username">
          <h3>Username *</h3>
        </Input>
        <Input type="email" htmlFor="email">
          <h3>Email *</h3>
        </Input>
        <Input type="password" htmlFor="password">
          <h3>Password *</h3>
        </Input>
        <Input type="password" htmlFor="confirm_password">
          <h3>Confirm Password *</h3>
        </Input>

        <Button label="Create Account" />
        <p className="ask-user">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Register;

import { NavLink } from "react-router";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

const Login = () => {
  return (
    <Container className="flex jc-center ai-center relative">
      <Form id="form-register">
        <Input type="text" htmlFor="username" classLabel="focus-green">
          <h3>Username or Email</h3>
        </Input>
        <Input type="password" htmlFor="password" classLabel="focus-green">
          <h3>Password</h3>
        </Input>

        <Button label="Login" className="bg-green" />
        <p className="ask-user">
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Login;

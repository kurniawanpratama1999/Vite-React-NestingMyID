// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

// COMPONENT
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input, { Checkbox } from "../../components/Input/Input";
import Form from "../../components/Form/Form";

const Register = () => {
  // state
  const navigate = useNavigate();

  // Password toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [registerData, setRegisterData] = useState({
    display_name: " ",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/register",
    body: { registerData },
    method: "POST",
  };

  const callback_IfSuccess = () => {
    navigate("/notification-after-register");
  };
  return (
    <Container>
      <Form fetcher_props={fetcher_props} callback={callback_IfSuccess}>
        <h3 className="text-center text-xl desktop:col-span-2">Cukup Satu Tautan</h3>

        <Input
          type="text"
          htmlFor="display_name"
          detail="display name :"
          focus="blue"
          value={registerData.display_name}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, display_name: target.value }))}
        />

        <Input
          type="text"
          htmlFor="username"
          detail="username :"
          focus="blue"
          value={registerData.username}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, username: target.value }))}
        />

        <Input
          classLabel="desktop:col-span-2"
          type="email"
          htmlFor="email"
          detail="email :"
          focus="blue"
          value={registerData.email}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, email: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          focus="blue"
          value={registerData.password}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, password: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm_password"
          detail="confirm password :"
          value={registerData.confirm_password}
          focus="blue"
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, confirm_password: target.value }))}
        />

        <Checkbox
          htmlFor="show-password"
          label="show password"
          className="desktop:col-span-2"
          onChange={handleShowPassword}
        />

        <Button label="Create Account" bgColor="blue" className="desktop:col-span-2" />

        <p className="text-sm text-center desktop:col-span-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Register;

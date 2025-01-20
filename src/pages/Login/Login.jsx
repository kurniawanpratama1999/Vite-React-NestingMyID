// DEPENDENCIES
import { NavLink } from "react-router";
import { useState } from "react";

// COMPONENT
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Input, { Checkbox } from "../../components/Input/Input";
import Form from "../../components/Form/Form";

const Login = () => {
  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [dataLogin, setDataLogin] = useState({ username_or_email: "", password: "" });

  const callback_IfSuccess = () => {
    console.log("if success jalan");
  };

  return (
    <Container>
      <Form obody={dataLogin} net="http://localhost:3000/api/v1/auth/login" method="POST" callback={callback_IfSuccess}>
        <h3 className="text-center text-xl">Cukup Satu Tautan</h3>
        <Input
          type="text"
          htmlFor="username"
          detail="username or email :"
          value={dataLogin.username_or_email}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, username_or_email: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          value={dataLogin.password}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, password: target.value }))}
        />

        <Checkbox htmlFor="show-password" label="show password" onChange={handleShowPassword} />

        <Button label="Login" bgColor="green" />
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-700">
            Register
          </NavLink>
        </p>
      </Form>
      <NavLink to="/forget-password" className="text-sm mt-3 text-center">
        Forget password ?
      </NavLink>
    </Container>
  );
};

export default Login;

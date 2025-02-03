// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

// COMPONENT
import { Container, Button, Input, Form } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const Login = () => {
  const navigate = useNavigate();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [dataLogin, setDataLogin] = useState({
    username_or_email: "",
    password: "",
  });

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/login",
    body: dataLogin,
    method: "POST",
  };

  // Stopwatch for disabled button
  const [leftTime, setLeftTime] = useState({
    leftHour: "",
    leftMinute: "",
    leftsecond: "",
  });

  // Toggle disable button after click
  const [disableButton, setDisableButton] = useState(false);
  const callback = () => navigate("/profile");

  // form props
  const form_props = {
    setDisableButton,
    setLeftTime,
    callback,
  };

  return (
    <Container>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
      >
        <h3 className="text-center text-xl">Login Account</h3>
        <Input
          type="text"
          htmlFor="username"
          detail="username or email :"
          value={dataLogin.username_or_email}
          onChange={({ target }) =>
            setDataLogin((prev) => ({
              ...prev,
              username_or_email: target.value,
            }))
          }
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          value={dataLogin.password}
          onChange={({ target }) =>
            setDataLogin((prev) => ({ ...prev, password: target.value }))
          }
          required
        />

        <Checkbox
          htmlFor="show-password"
          label="show password"
          onChange={handleShowPassword}
        />

        <Button
          type="submit"
          label={
            disableButton
              ? `Click Again At ${leftTime.leftHour}:${leftTime.leftMinute}:${leftTime.leftsecond}`
              : "Confirm"
          }
          bgColor="blue"
          className="disabled:bg-gray-400"
          disabled={disableButton}
        />
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

// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

// COMPONENT
import { Container, Button, Input, Form } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

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

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/register",
    body: registerData,
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
  const callback = () => navigate("/notif/register");

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
        <h3 className="text-center text-xl desktop:col-span-2">
          Register Account
        </h3>

        <Input
          type="text"
          htmlFor="display_name"
          detail="display name :"
          focus="blue"
          value={registerData.display_name}
          onChange={({ target }) =>
            setRegisterData((prev) => ({ ...prev, display_name: target.value }))
          }
          required
        />

        <Input
          type="text"
          htmlFor="username"
          detail="username :"
          focus="blue"
          value={registerData.username}
          onChange={({ target }) =>
            setRegisterData((prev) => ({ ...prev, username: target.value }))
          }
          required
        />

        <Input
          classLabel="desktop:col-span-2"
          type="email"
          htmlFor="email"
          detail="email :"
          focus="blue"
          value={registerData.email}
          onChange={({ target }) =>
            setRegisterData((prev) => ({ ...prev, email: target.value }))
          }
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          focus="blue"
          value={registerData.password}
          onChange={({ target }) =>
            setRegisterData((prev) => ({ ...prev, password: target.value }))
          }
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm_password"
          detail="confirm password :"
          value={registerData.confirm_password}
          focus="blue"
          onChange={({ target }) =>
            setRegisterData((prev) => ({
              ...prev,
              confirm_password: target.value,
            }))
          }
          required
        />

        <Checkbox
          htmlFor="show-password"
          label="show password"
          className="desktop:col-span-2"
          onChange={handleShowPassword}
        />

        <Button
          type="Create Account"
          label={
            disableButton
              ? `Click Again At ${leftTime.leftHour}:${leftTime.leftMinute}:${leftTime.leftsecond}`
              : "Confirm"
          }
          bgColor="blue"
          className="disabled:bg-gray-400 desktop:col-span-2"
          disabled={disableButton}
        />

        <p className="text-sm text-center desktop:col-span-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Register;

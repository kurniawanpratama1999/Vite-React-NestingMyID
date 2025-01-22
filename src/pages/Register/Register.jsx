// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useRef, useState } from "react";

// COMPONENT
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input, { Checkbox } from "../../components/Input/Input";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";

const Register = () => {
  // state
  const navigate = useNavigate();

  // Message Settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Password toggle show
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Handle Close
  const handleClose = () => setShowMessage(false);

  // Collect Data
  const [registerData, setRegisterData] = useState({
    display_name: " ",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // State_Props
  const state_props = {
    setCMessage,
    setMessage,
    setShowMessage,
    timeOutID,
  };

  // Popup Props
  const popup_props = {
    cMessage,
    message,
    handleClose,
  };

  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/register",
    body: { registerData },
    method: "POST",
  };

  const callback = () => {
    navigate("/notification-after-register", { replace: true });
  };

  // Handle Submit
  const submitButton = (e) => handleSubmit(e, fetcher_props, state_props, callback);
  return (
    <Container>
      {showMessage && <Popup popup_props={popup_props} />}
      <form className={formStyles.form({})}>
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

        <Button
          type="button"
          label="Create Account"
          bgColor="blue"
          className="desktop:col-span-2"
          onClick={submitButton}
        />

        <p className="text-sm text-center desktop:col-span-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </Container>
  );
};

export default Register;

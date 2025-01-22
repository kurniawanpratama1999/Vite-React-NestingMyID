// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useRef, useState } from "react";

// COMPONENT
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Input, { Checkbox } from "../../components/Input/Input";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";
import handleSubmit from "../../utils/handleSubmit";

const Login = () => {
  const navigate = useNavigate();

  // Message Settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Handle Close
  const handleClose = () => setShowMessage(false);

  // Collect Data
  const [dataLogin, setDataLogin] = useState({ username_or_email: "", password: "" });

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

  // For Fecth
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/login",
    body: { dataLogin },
    method: "POST",
  };

  const callback = () => {
    navigate("/profile", { replace: true });
  };

  // Handle Submit
  const submitButton = (e) => handleSubmit(e, fetcher_props, state_props, callback);

  return (
    <Container>
      <form className={formStyles.form({})}>
        {showMessage && <Popup popup_props={popup_props} />}
        <h3 className="text-center text-xl">Cukup Satu Tautan</h3>
        <Input
          type="text"
          htmlFor="username"
          detail="username or email :"
          value={dataLogin.username_or_email}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, username_or_email: target.value }))}
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          value={dataLogin.password}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, password: target.value }))}
          required
        />

        <Checkbox htmlFor="show-password" label="show password" onChange={handleShowPassword} />

        <Button type="button" label="Login" bgColor="green" onClick={submitButton} />
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-700">
            Register
          </NavLink>
        </p>
      </form>
      <NavLink to="/forget-password" className="text-sm mt-3 text-center">
        Forget password ?
      </NavLink>
    </Container>
  );
};

export default Login;

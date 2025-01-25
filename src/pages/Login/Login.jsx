// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";

// COMPONENT
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Input, { Checkbox } from "../../components/Input/Input";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";
import handleSubmit from "../../utils/handleSubmit";

const Login = () => {
  const navigate = useNavigate();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [dataLogin, setDataLogin] = useState({ username_or_email: "", password: "" });

  // Message Settings;
  const [response, setResponse] = useState({ success: null, message: "loading" });
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Handle Close
  const REPEAT_TIME_BTN_POPUP = 10;
  const [timeBtnBackPopup, setTimeBtnBackPopup] = useState(REPEAT_TIME_BTN_POPUP);
  const [lastClickBtnPopup, setLastClickBtnPopup] = useState(null);
  const timeIntervalBtnPopup = useRef(null);

  // Handle Submit
  const REPEAT_TIMER = 5;
  const [timer, setTimer] = useState(REPEAT_TIMER);
  const [disbleButton, setDisableButton] = useState(false);
  const [lastClick, setLastClick] = useState(null);
  const timeOutBtn = useRef(null);

  // Close pop up
  const handleClose = () => {
    clearInterval(timeIntervalBtnPopup.current);
    setTimeBtnBackPopup((prev) => REPEAT_TIME_BTN_POPUP);
    setLastClickBtnPopup(null);
    setShowMessage(false);
  };

  // button props
  const btnpopup_props = {
    REPEAT_TIME_BTN_POPUP,
    timeBtnBackPopup,
    setTimeBtnBackPopup,
    lastClickBtnPopup,
    setLastClickBtnPopup,
    timeIntervalBtnPopup,
  };

  // State_Props
  const state_props = {
    setResponse,
    setShowMessage,
    timeOutID,
  };

  // Popup Props
  const popup_props = {
    response,
    handleClose,
  };

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/login",
    body: dataLogin,
    method: "POST",
  };

  // Clean up
  useEffect(() => {
    if (timer <= 1) {
      clearInterval(timeOutBtn.current);
      setDisableButton(false);
      setLastClick(null);
    }

    return () => clearInterval(timeOutBtn.current);
  }, [timer]);

  // EFFECT
  useEffect(() => {
    clearInterval(timeOutBtn.current);
    // console.log("timer: ", timer);
    if (lastClick) {
      timeOutBtn.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer <= 1) {
        clearInterval(timeOutBtn.current);
        setDisableButton(false);
        setLastClick(null);
      }
    } else {
      clearInterval(timeOutBtn.current);
      setTimer(REPEAT_TIMER);
    }
    return () => clearInterval(timeOutBtn.current);
  }, [lastClick, timer]);

  // Call back if success
  const callback = () => {
    navigate("/profile", { replace: true });
    setLastClick(null);
  };

  // Handle Submit
  const submitButton = (e) => {
    e.preventDefault();
    const newDate = new Date();
    setDisableButton(true);

    // Execute
    handleSubmit({ e, fetcher_props, state_props, btnpopup_props, callback });

    // Lastclick
    setLastClick(newDate);
  };

  const leftMinute = Math.floor(timer / 60)
    .toString()
    .padStart(2, 0);

  const leftsecond = (timer % 60).toString().padStart(2, 0);

  return (
    <Container>
      <form className={formStyles.form({})} onSubmit={submitButton}>
        {showMessage && <Popup popup_props={popup_props} btnpopup_props={btnpopup_props} state_props={state_props} />}
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

        <Button
          type="submit"
          label={disbleButton ? `Click Again At ${leftMinute}:${leftsecond}` : "Confirm"}
          bgColor="blue"
          className="disabled:bg-gray-400"
          disabled={disbleButton}
        />
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

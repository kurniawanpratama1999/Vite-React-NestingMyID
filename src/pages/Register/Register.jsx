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

const Register = () => {
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
  // state
  const navigate = useNavigate();

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
    net: "http://localhost:3000/api/v1/auth/register",
    body: registerData,
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
    navigate("/notification-after-register", { replace: true });
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
        <h3 className="text-center text-xl desktop:col-span-2">Cukup Satu Tautan</h3>

        <Input
          type="text"
          htmlFor="display_name"
          detail="display name :"
          focus="blue"
          value={registerData.display_name}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, display_name: target.value }))}
          required
        />

        <Input
          type="text"
          htmlFor="username"
          detail="username :"
          focus="blue"
          value={registerData.username}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, username: target.value }))}
          required
        />

        <Input
          classLabel="desktop:col-span-2"
          type="email"
          htmlFor="email"
          detail="email :"
          focus="blue"
          value={registerData.email}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, email: target.value }))}
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          focus="blue"
          value={registerData.password}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, password: target.value }))}
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm_password"
          detail="confirm password :"
          value={registerData.confirm_password}
          focus="blue"
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, confirm_password: target.value }))}
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
          label={disbleButton ? `Click Again At ${leftMinute}:${leftsecond}` : "Confirm"}
          bgColor="blue"
          className="disabled:bg-gray-400 desktop:col-span-2"
          disabled={disbleButton}
        />

        <p className="text-sm text-center desktop:col-span-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </Container>
  );
};

export default Register;

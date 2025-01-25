import { useEffect, useRef, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import { data, useNavigate, useParams } from "react-router";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Input, { Checkbox } from "../../components/Input/Input";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";
import handleSubmit from "../../utils/handleSubmit";

const Step3_InsertNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isMatching, setIsMatching] = useState({ success: false, message: "" });
  const { email, username, otp } = useParams();
  const [dataNewPassword, setDataNewPassword] = useState({
    newPassword: "",
    confirmPassword: "",
    email,
    username,
    otp_encode: otp,
  });

  // Message Settings
  const [response, setResponse] = useState({
    success: null,
    message: "loading",
    time: 10,
  });
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Handle Close
  const REPEAT_TIME_BTN_POPUP = 10;
  const [timeBtnBackPopup, setTimeBtnBackPopup] = useState(
    REPEAT_TIME_BTN_POPUP
  );
  const [lastClickBtnPopup, setLastClickBtnPopup] = useState(null);
  const timeIntervalBtnPopup = useRef(null);

  // Close pop up
  const handleClose = () => {
    clearInterval(timeIntervalBtnPopup.current);

    setTimeBtnBackPopup((prev) => REPEAT_TIME_BTN_POPUP);
    setLastClickBtnPopup(null);
    setShowMessage(false);
  };

  // Fetch props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-new-password",
    body: dataNewPassword,
    method: "PUT",
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

  // Handle Submit
  const REPEAT_TIMER = 5;
  const [timer, setTimer] = useState(REPEAT_TIMER);
  const [disableButton, setDisableButton] = useState(false);
  const [lastClick, setLastClick] = useState(null);
  const timeOutBtn = useRef(null);

  const submitButton = (e) => {
    e.preventDefault();
    const newDate = new Date();
    setDisableButton(true);

    // Execute
    handleSubmit({ e, fetcher_props, state_props, btnpopup_props, callback });

    // Lastclick
    setLastClick(newDate);
  };

  useEffect(() => {
    setTimer(response?.time || 10);
  }, [response]);

  // clean up
  useEffect(() => {
    if (timer.start <= 1) {
      clearInterval(timeOutBtn.current);
      setDisableButton(false);
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

  const callback = () => {
    setLastClick(null);
    setResponse({ success: true, message: "Ganti Password Berhasil" });
    navigate("/login");
  };

  const leftMinute = Math.floor(timer / 60)
    .toString()
    .padStart(2, 0);

  const leftsecond = (timer % 60).toString().padStart(2, 0);

  useEffect(() => {
    const method = "POST";
    const net = "http://localhost:3000/api/v1/user/forget-password-analys-otp";
    const body = { email, username, otp_encode: otp };
    fetcher({ method, net, body })
      .then((res) => {
        console.log(res);
        setIsMatching((prev) => ({
          ...prev,
          success: res.success,
          message: res.message,
        }));
      })
      .catch((err) => setIsMatching({ success: false, message: err }));
  }, []);

  return (
    <Container>
      {isMatching.success ? (
        <form className={formStyles.form({})} onSubmit={submitButton}>
          {showMessage && (
            <Popup
              popup_props={popup_props}
              btnpopup_props={btnpopup_props}
              state_props={state_props}
            />
          )}

          <Input
            type={showPassword ? "text" : "password"}
            htmlFor="new-password"
            detail="New Password :"
            focus="blue"
            value={dataNewPassword.username_or_email}
            onChange={({ target }) =>
              setDataNewPassword((prev) => ({
                ...prev,
                newPassword: target.value,
              }))
            }
            required
          />
          <Input
            type={showPassword ? "text" : "password"}
            htmlFor="confirm-password"
            detail="Confirm Password :"
            focus="blue"
            value={dataNewPassword.username_or_email}
            onChange={({ target }) =>
              setDataNewPassword((prev) => ({
                ...prev,
                confirmPassword: target.value,
              }))
            }
            required
          />
          <Checkbox htmlFor="show-password" onChange={handleShowPassword} />
          <Button
            type="submit"
            label={
              disableButton
                ? `Click Again At ${leftMinute}:${leftsecond}`
                : "Confirm"
            }
            bgColor="blue"
            className="disabled:bg-gray-400"
            disabled={disableButton}
          />
        </form>
      ) : (
        isMatching?.message
      )}
    </Container>
  );
};

export default Step3_InsertNewPassword;

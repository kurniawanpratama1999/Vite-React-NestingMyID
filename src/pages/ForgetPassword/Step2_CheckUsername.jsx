import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useContext, useEffect, useRef, useState } from "react";
import {
  InsertEmailContext,
  CheckUsernameContext,
} from "../../contexts/CustomContext/CustomContext";
import Popup from "../../components/Popup/Popup";
import handleSubmit from "../../utils/handleSubmit";
import formStyles from "../../components/Form/form";

export const Step2_CheckUsername = ({ children }) => {
  const { email } = useContext(InsertEmailContext);
  const [username, setUsername] = useState("");
  const [emailAndUsernameIsMatch, setEmailAndUsernameIsMatch] = useState(false);

  const [leftTime, setLeftTime] = useState({
    leftHour: "",
    leftMinute: "",
    leftsecond: "",
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
    net: "http://localhost:3000/api/v1/user/forget-password-check-username",
    body: { email, username },
    method: "POST",
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
    console.log(response);
    setTimer(response?.time || 10);
  }, [response]);

  // clean up
  useEffect(() => {
    setLeftTime((prev) => ({
      ...prev,
      leftHour: Math.floor(timer / 3600)
        .toString()
        .padStart(2, 0),
      leftMinute: Math.floor((timer % 3600) / 60)
        .toString()
        .padStart(2, 0),
      leftsecond: (timer % 60).toString().padStart(2, 0),
    }));
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
    setEmailAndUsernameIsMatch(true);
    setLastClick(null);
  };

  return emailAndUsernameIsMatch ? (
    <CheckUsernameContext.Provider value={{ email, username }}>
      {children}
    </CheckUsernameContext.Provider>
  ) : (
    <Container>
      <form className={formStyles.form({})} onSubmit={submitButton}>
        {showMessage && (
          <Popup
            popup_props={popup_props}
            btnpopup_props={btnpopup_props}
            state_props={state_props}
          />
        )}
        <p>Step 2 - Insert Your Username</p>
        <p>Email: {email}</p>
        <Input
          type="text"
          htmlFor="username"
          detail="Username :"
          focus="blue"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          required
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
      </form>
    </Container>
  );
};

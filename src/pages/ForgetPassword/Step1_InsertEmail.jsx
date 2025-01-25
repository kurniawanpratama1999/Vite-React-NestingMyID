import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";
import handleSubmit from "../../utils/handleSubmit";
import { InsertEmailContext } from "../../contexts/CustomContext/CustomContext";

export const Step1_InsertEmail = ({ children }) => {
  const [isUserExist, SetIsUserExist] = useState(false);
  const [email, setEmail] = useState("");

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
    net: "http://localhost:3000/api/v1/user/forget-password-check-email",
    body: { email },
    method: "POST",
  };

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
    console.log(response)
    setTimer(response?.time)
  }, [response]);

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
    SetIsUserExist(true);
    setLastClick(null);
    // handleClose();
  };

  const leftMinute = Math.floor(timer / 60)
    .toString()
    .padStart(2, 0);

  const leftsecond = (timer % 60).toString().padStart(2, 0);

  // ELEMENT
  return isUserExist ? (
    <InsertEmailContext.Provider value={{ email }}>{children}</InsertEmailContext.Provider>
  ) : (
    <Container>
      <form className={formStyles.form({})} onSubmit={submitButton}>
        {showMessage && <Popup popup_props={popup_props} btnpopup_props={btnpopup_props} state_props={state_props} />}
        <p>Step 1 - Insert Your Email</p>
        <Input
          type="email"
          htmlFor="email"
          detail="Email :"
          focus="blue"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Button
          type="submit"
          label={disbleButton ? `Click Again At ${leftMinute}:${leftsecond}` : "Confirm"}
          bgColor="blue"
          className="disabled:bg-gray-400"
          disabled={disbleButton}
        />
      </form>
    </Container>
  );
};

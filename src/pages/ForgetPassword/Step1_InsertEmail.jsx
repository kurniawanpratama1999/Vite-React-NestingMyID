import { createContext, useContext, useEffect, useRef, useState } from "react";
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
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Handle Close
  const [timeBtnBackPopup, setTimeBtnBackPopup] = useState({ start: 10, repeat: 10 });
  const [lastClickBtnPopup, setLastClickBtnPopup] = useState();
  const timeIntervalBtnPopup = useRef(null);

  // Close pop up
  const handleClose = () => {
    clearInterval(timeIntervalBtnPopup.current);
    setTimeBtnBackPopup((prev) => ({ ...prev, start: prev.repeat }));
    setShowMessage(false);
  };

  // button props
  const btnpopup_props = {
    timeBtnBackPopup,
    setTimeBtnBackPopup,
    lastClickBtnPopup,
    setLastClickBtnPopup,
    timeIntervalBtnPopup,
  };

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

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-check-email",
    body: { email },
    method: "POST",
  };

  // Call back if success
  const callback = () => {
    SetIsUserExist(true);
  };

  // Handle Submit
  const [timer, setTimer] = useState({ start: 5, repeat: 5 });
  const [disbleButton, setDisableButton] = useState(false);
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

  // EFFECT
  useEffect(() => {
    clearInterval(timeOutBtn.current);
    if (lastClick) {
      timeOutBtn.current = setInterval(() => {
        setTimer((prev) => ({ ...prev, start: prev.start - 1 }));
        if (timer.start <= 1) {
          clearInterval(timeOutBtn.current);
          setDisableButton(false);
          setTimer((prev) => ({ ...prev, start: prev.repeat }));
        }
      }, 1000);
    }
    return () => clearInterval(timeOutBtn.current);
  }, [lastClick, timer]);

  const leftMinute = Math.floor(timer.start / 60)
    .toString()
    .padStart(2, 0);

  const leftsecond = (timer.start % 60).toString().padStart(2, 0);

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

import React, { useEffect, useRef, useState } from "react";
import { Popup } from "@/Components";
import handleSubmit from "@/Utils/handleSubmit";

const Form = ({ children, className = "", fetcher_props, form_props }) => {
  const { setLeftTime, setDisableButton, callback } = form_props;

  // Message Settings;
  const [response, setResponse] = useState({
    success: null,
    message: "loading",
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

  // Handle Submit
  const REPEAT_TIMER = 5;
  const [timer, setTimer] = useState(REPEAT_TIMER);
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

  // Clean up
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
  return (
    <form onSubmit={submitButton} className={className}>
      {showMessage && (
        <Popup
          popup_props={popup_props}
          btnpopup_props={btnpopup_props}
          state_props={state_props}
        />
      )}
      {children}
    </form>
  );
};

export default Form;

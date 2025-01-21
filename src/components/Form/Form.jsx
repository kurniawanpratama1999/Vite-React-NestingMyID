import Popup from "../Popup/Popup";
import formStyles from "./form";
import { useRef, useState } from "react";
import handleSubmit from "../../utils/handleSubmit";

const Form = ({ fetcher_props, callback, children, className = "", ...props }) => {
  const timeOutID = useRef(null);
  // Message settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
  };

  const state_props = {
    setCMessage,
    setMessage,
    setShowMessage,
    timeOutID,
  };

  const submitButton = (e) => handleSubmit(e, fetcher_props, state_props, callback);

  const popup_props = {
    cMessage,
    message,
    handleClose,
  };
  return (
    <>
      {showMessage && <Popup popup_props={popup_props} />}
      <form className={formStyles.form({}, className)} {...props} onSubmit={submitButton}>
        {children}
      </form>
    </>
  );
};

export default Form;

import Popup from "../Popup/Popup";
import formStyles from "./form";
import { useRef, useState } from "react";
import handleSubmit from "../../utils/handleSubmit";

const Form = ({ children, className = "", net, method, body, callback, ...props }) => {
  const timeOutID = useRef(null);
  // Message settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
  };

  const submitButton = (e) =>
    handleSubmit(e, method, net, body, setShowMessage, setCMessage, setMessage, timeOutID, callback);
  return (
    <>
      {showMessage && <Popup cMessage={cMessage} message={message} handleClose={handleClose} />}
      <form className={formStyles.form({}, className)} {...props} onSubmit={submitButton}>
        {children}
      </form>
    </>
  );
};

export default Form;

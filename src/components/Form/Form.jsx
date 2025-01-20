import { useState } from "react";
import Popup from "../Popup/Popup";
import formStyles from "./form";

const Form = ({ children, className = "", cMessage = null, message, showMessage = false, handleClose, ...props }) => {
  return (
    <>
      {showMessage && <Popup cMessage={cMessage} message={message} handleClose={handleClose} />}
      <form className={formStyles.form({}, className)} {...props}>
        {children}
      </form>
    </>
  );
};

export default Form;

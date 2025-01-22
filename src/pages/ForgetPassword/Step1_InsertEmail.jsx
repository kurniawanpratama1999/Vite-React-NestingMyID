import { createContext, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import formStyles from "../../components/Form/form";
import Popup from "../../components/Popup/Popup";
export const InsertEmailContext = createContext();
const Step1_InsertEmail = ({ children }) => {
  const [isUserExist, SetIsUserExist] = useState(false);
  const [email, setEmail] = useState("");

  // Message Settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Handle Close
  const handleClose = () => setShowMessage(false);

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

  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-check-email",
    body: { email },
    method: "POST",
  };

  const callback = () => {
    SetIsUserExist(true);
  };

  // Handle Submit
  const submitButton = (e) => handleSubmit(e, fetcher_props, state_props, callback);

  // ELEMENT
  return isUserExist ? (
    <InsertEmailContext.Provider value={email}>{children}</InsertEmailContext.Provider>
  ) : (
    <Container>
      {showMessage && <Popup popup_props={popup_props} />}
      <form className={formStyles.form({})}>
        <p>Step 1 - Insert Your Email</p>
        <Input
          type="email"
          htmlFor="email"
          detail="Email :"
          focus="blue"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Button label="Confirm" bgColor="blue"></Button>
      </form>
    </Container>
  );
};

export default Step1_InsertEmail;

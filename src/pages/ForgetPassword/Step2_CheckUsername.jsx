import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { createContext, useContext, useState } from "react";
import { InsertEmailContext } from "./Step1_InsertEmail";
import Popup from "../../components/Popup/Popup";

const CheckUsernameContext = createContext();
const Step2_CheckUsername = ({ children }) => {
  const email = useContext(InsertEmailContext);
  const [username, setUsername] = useState("");
  const [emailAndUsernameIsMatch, setEmailAndUsernameIsMatch] = useState(false);

  // Message Settings
  const [message, setMessage] = useState("loading");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const timeOutID = useRef(null);

  // Fetch props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-check-username",
    body: { email, username },
    method: "POST",
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

  // Handle Close
  const handleClose = () => setShowMessage(false);

  const callback = () => {
    console.log("berhasil");
    // setEmailAndUsernameIsMatch(true);
  };

  // Handle Submit
  const submitButton = (e) => handleSubmit(e, fetcher_props, state_props, callback);

  return emailAndUsernameIsMatch ? (
    <CheckUsernameContext.Provider value={{ email, username }}>{children}</CheckUsernameContext.Provider>
  ) : (
    <Container>
      {showMessage && <Popup popup_props={popup_props} />}
      <form>
        <p>Step 2 - Insert Your Username</p>
        <p>Email: {email}</p>
        <Input
          type="text"
          htmlFor="username"
          detail="Username :"
          focus="blue"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button label="Send Activation" bgColor="blue" />
      </form>
    </Container>
  );
};

export default Step2_CheckUsername;

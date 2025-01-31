import { useState } from "react";
import { useNavigate } from "react-router";
import { Input, Button, Container, Form } from "@/Components";
import formStyles from "@/Components/Form/form";
import { HookContext } from "@/Contexts";
import Nofitication_ForgetPassword from "@/Pages/Notification/ForgetPassword";

const InsertEmailSetting = ({ children }) => {
  // state
  const navigate = useNavigate();
  const [isUserExist, setIsUserExist] = useState(false);

  // Collect Data
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/auth/forget-password",
    body: { email, username },
    method: "PUT",
  };

  // Stopwatch for disabled button
  const [leftTime, setLeftTime] = useState({
    leftHour: "",
    leftMinute: "",
    leftsecond: "",
  });

  // Toggle disable button after click
  const [disableButton, setDisableButton] = useState(false);
  const callback = () => setIsUserExist(true);

  // form props
  const form_props = {
    setDisableButton,
    setLeftTime,
    callback,
  };
  return isUserExist ? (
    <HookContext.Provider value={{ email, username }}>
      {children}
    </HookContext.Provider>
  ) : (
    <Container>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
      >
        <Input
          type="email"
          htmlFor="email"
          detail="Email :"
          focus="blue"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
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
      </Form>
    </Container>
  );
};

const InsertEmail = () => {
  return (
    <InsertEmailSetting>
      <Nofitication_ForgetPassword />
    </InsertEmailSetting>
  );
};

export default InsertEmail;

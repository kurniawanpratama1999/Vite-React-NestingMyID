import { useState } from "react";
import { useNavigate } from "react-router";

import { Container, Button, Input, Form } from "@/Components";
import formStyles from "@/Components/Form/form";

const CheckUsername = () => {
  // state
  const navigate = useNavigate();

  // Collect Data
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-check-username",
    body: { email, username },
    method: "POST",
  };

  // Stopwatch for disabled button
  const [leftTime, setLeftTime] = useState({
    leftHour: "",
    leftMinute: "",
    leftsecond: "",
  });

  // Toggle disable button after click
  const [disableButton, setDisableButton] = useState(false);
  const callback = () => navigate("/notif/forget-password");

  // form props
  const form_props = {
    setDisableButton,
    setLeftTime,
    callback,
  };

  return (
    <Container>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
      >
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
      </Form>
    </Container>
  );
};

export default CheckUsername;

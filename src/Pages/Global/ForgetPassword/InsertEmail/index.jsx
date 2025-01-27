import { useState } from "react";
import { useNavigate } from "react-router";
import { Input, Button, Container, Form } from "@/Components";
import formStyles from "@/Components/Form/form";

const InsertEmail = () => {
  // state
  const navigate = useNavigate();

  // Collect Data
  const [email, setEmail] = useState("");

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-insert-email",
    body: { email },
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
  const callback = () => navigate("/forget-password/insert-username");

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

export default InsertEmail;

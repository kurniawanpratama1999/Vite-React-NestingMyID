// DEPENDENCIES
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

// COMPONENT
import { Container, Button, Input, Form } from "@/Components";
import formStyles from "@/Components/Form/form";
import { ProfileProvider } from "@/Contexts";

const InsertNewEmailSetting = () => {
  const { email, username, otpCode } = useParams();
  const navigate = useNavigate();

  // Collect Data
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  // fetcher props
  let endPoint = `${email}/${username}`;
  if (otpCode) {
    endPoint = `${endPoint}/${otpCode}`;
  }
  const fetcher_props = {
    net: `http://localhost:3000/api/v1/auth/change-email/${endPoint}`,
    body: { newEmail, confirmEmail },
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
  const callback = () => navigate("/logout");

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
        isAuth={true}
      >
        <h3 className="text-center text-xl">Change Email</h3>

        <Input
          type="email"
          htmlFor="new-email"
          detail="Insert New Email :"
          value={newEmail}
          onChange={({ target }) => setNewEmail(target.value)}
          required
        />
        <Input
          type="email"
          htmlFor="confirm-email"
          detail="Confirm Email :"
          value={confirmEmail}
          onChange={({ target }) => setConfirmEmail(target.value)}
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

const InsertNewEmail = () => {
  return (
    <ProfileProvider>
      <InsertNewEmailSetting />
    </ProfileProvider>
  );
};

export default InsertNewEmail;

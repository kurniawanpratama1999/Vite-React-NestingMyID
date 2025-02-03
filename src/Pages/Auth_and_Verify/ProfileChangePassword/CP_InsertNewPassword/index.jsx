import { Button, Container, Form, Input } from "@/Components";
import { Checkbox } from "@/Components/Input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const CP_InsertNewPassword = () => {
  const navigate = useNavigate();
  const { email, username, otpCode } = useParams();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  // Collect Data
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // fetcher props
  const endPoint = `${email}/${username}/${otpCode}`;

  const fetcher_props = {
    net: `http://localhost:3000/api/v1/auth/change-password/${endPoint}`,
    body: { newPassword, confirmPassword },
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
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
      >
        <h3 className="text-center text-xl">Change Password</h3>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="Password :"
          focus="blue"
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
        />
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="Password :"
          focus="blue"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <Checkbox
          htmlFor="show-password"
          label="show password"
          onChange={handleShowPassword}
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

export default CP_InsertNewPassword;

import { useEffect, useRef, useState } from "react";
import { fetcher } from "@/Utils/fetcher";
import { useNavigate, useParams } from "react-router";
import { Container, Button, Input, Form } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const InsertNewPassword = () => {
  // state
  const navigate = useNavigate();
  const { email, username, otpCode } = useParams();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [sendData, setSendData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  // fetcher props
  const fetcher_props = {
    net: `http://localhost:3000/api/v1/auth/forget-password/new-password/${email}/${username}/${otpCode}`,
    body: sendData,
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
  const callback = () => navigate("/login");

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
        <h3 className="text-center text-xl">Forget Password</h3>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="new-password"
          detail="New Password :"
          focus="blue"
          value={sendData.newPassword}
          onChange={({ target }) =>
            setSendData((prev) => ({
              ...prev,
              newPassword: target.value,
            }))
          }
          required
        />
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm-password"
          detail="Confirm Password :"
          focus="blue"
          value={sendData.confirmPassword}
          onChange={({ target }) =>
            setSendData((prev) => ({
              ...prev,
              confirmPassword: target.value,
            }))
          }
          required
        />
        <Checkbox htmlFor="show-password" onChange={handleShowPassword} />
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

export default InsertNewPassword;

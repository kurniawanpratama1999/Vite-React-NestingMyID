import { useEffect, useRef, useState } from "react";
import { fetcher } from "@/Utils/fetcher";
import { useNavigate } from "react-router";
import { Container, Button, Input, Form } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const Step3_InsertNewPassword = () => {
  // state
  const navigate = useNavigate();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [sendData, setSendData] = useState({
    newPassword: "",
    confirmPassword: "",
    otp: "",
  });

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/user/forget-password-new-password",
    body: sendData,
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

  useEffect(() => {
    const method = "POST";
    const net = "http://localhost:3000/api/v1/user/forget-password-analys-otp";
    const body = { email, username, otp_encode: otp };
    fetcher({ method, net, body })
      .then((res) => {
        console.log(res);
        setIsMatching((prev) => ({
          ...prev,
          success: res.success,
          message: res.message,
        }));
      })
      .catch((err) => setIsMatching({ success: false, message: err }));
  }, []);

  return (
    <Container>
      {isMatching.success ? (
        <Form
          className={formStyles.form({})}
          fetcher_props={fetcher_props}
          form_props={form_props}
        >
          <Input
            type={showPassword ? "text" : "password"}
            htmlFor="new-password"
            detail="New Password :"
            focus="blue"
            value={dataNewPassword.username_or_email}
            onChange={({ target }) =>
              setDataNewPassword((prev) => ({
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
            value={dataNewPassword.username_or_email}
            onChange={({ target }) =>
              setDataNewPassword((prev) => ({
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
      ) : (
        isMatching?.message
      )}
    </Container>
  );
};

export default Step3_InsertNewPassword;

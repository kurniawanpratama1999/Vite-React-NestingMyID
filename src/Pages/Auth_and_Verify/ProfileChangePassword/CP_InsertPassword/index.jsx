import React, { useContext, useState } from "react";
import { Container, Input, Button, Form } from "@/Components";
import formStyles from "@/Components/Form/form";
import { HookContext, ProfileProvider } from "@/Contexts";
import Nofitication_ForgetPassword from "@/Pages/Notification/ForgetPassword";
import { Checkbox } from "@/Components/Input";

const CP_InsertPasswordSetting = () => {
  const { email, username } = useContext(HookContext);

  // state
  const [isCorrectPassword, setCorrectPassword] = useState(false);
  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  // Collect Data
  const [password, setPassword] = useState("");

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/verify/change-password",
    body: { password },
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
  const callback = () => setCorrectPassword(true);

  // form props
  const form_props = {
    setDisableButton,
    setLeftTime,
    callback,
  };
  return isCorrectPassword ? (
    <HookContext.Provider>{children}</HookContext.Provider>
  ) : (
    <Container>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
      >
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="Password :"
          focus="blue"
          value=""
          onChange={({ target }) => setPassword(target.value)}
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

const CP_InsertPassword = () => {
  return (
    <ProfileProvider>
      <CP_InsertPasswordSetting>
        <Nofitication_ForgetPassword />
      </CP_InsertPasswordSetting>
    </ProfileProvider>
  );
};

export default CP_InsertPassword;

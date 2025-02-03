// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";

// COMPONENT
import { Container, Button, Input, Form } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";
import { HookContext, ProfileProvider } from "@/Contexts";
import Nofitication_ForgetPassword from "@/Pages/Notification/ForgetPassword";

const InsertPasswordSetting = ({ children }) => {
  const { email, username, isVerify } = useContext(HookContext);
  const [isCorrectPassword, SetIsCorrectPassword] = useState(null);
  const navigate = useNavigate();

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [password, setPassword] = useState("");

  // fetcher props
  const fetcher_props = {
    net: "http://localhost:3000/api/v1/verify/change-email",
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
  const callback = () => {
    SetIsCorrectPassword(true);
    if (!isVerify) {
      navigate(`/profile/email/${email}/${username}`);
    }
  };

  // form props
  const form_props = {
    setDisableButton,
    setLeftTime,
    callback,
  };

  return isCorrectPassword && isVerify ? (
    <HookContext.Provider value={{ email, username }}>
      {children}
    </HookContext.Provider>
  ) : (
    <Container>
      <Form
        className={formStyles.form({})}
        fetcher_props={fetcher_props}
        form_props={form_props}
        isAuth={true}
      >
        <h3 className="text-center text-xl">Change Email</h3>
        <div>
          <p>Email: {email}</p>
          <p>Username: {username}</p>
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="Insert password :"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
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

const InsertPassword = () => {
  return (
    <ProfileProvider>
      <InsertPasswordSetting>
        <Nofitication_ForgetPassword />
      </InsertPasswordSetting>
    </ProfileProvider>
  );
};
export default InsertPassword;

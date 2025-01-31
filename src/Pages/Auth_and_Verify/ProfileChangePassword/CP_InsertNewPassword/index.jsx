import { useParams } from "react-router";

const CP_InsertNewPasswordSetting = () => {
  const { email, username, otpCode } = useParams();

  // state
  const [isCorrectPassword, setCorrectPassword] = useState(false);
  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  // Collect Data
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // fetcher props
  let endPoint = `${email}/${username}`;

  if (otpCode) {
    endPoint = endPoint = `/${otpCode}`;
  }

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
  const callback = () => setIsUserExist(true);

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
          onChange={({ target }) => setNewPassword(target.value)}
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
const CP_InsertNewPassword = () => {};

export default CP_InsertNewPassword;

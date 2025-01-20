import { useRef, useState } from "react";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const ForgetPassword = () => {
  const [message, setMessage] = useState("");
  const [cMessage, setCMessage] = useState("hidden");
  const [showPassword, setShowPassword] = useState(false);
  const timeOutID = useRef(null);
  const [stepCounter, setStepCounter] = useState(1); // (1) check username or email. (2) input otp. (3) new password.
  const [dataUser, setDataUser] = useState({
    username_or_email: "",
    email: "",
    otp: "",
    is_verify: "",
    new_password: "",
    confirm_password: "",
  });
  const [disableReqOTP, setDisableReqOTP] = useState(false);

  // handleButton
  const handleCheckUsernameOrEmail = (e) => {
    e.preventDefault();
    setStepCounter((prev) => 2);
  };
  const handleInputOTP = (e) => {
    e.preventDefault();
    setStepCounter((prev) => 3);
  };
  const handleInputNewPassword = (e) => {
    e.preventDefault();
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStepCounter((prev) => (prev <= 1 ? 1 : prev - 1));
  };
  const handleShowPassword = () => {};
  return (
    <Container className="flex jc-center ai-center relative">
      <Form
        id="form-forgetPassword"
        message={message}
        cMessage={cMessage}
        oncSumbit={
          stepCounter === 1
            ? handleCheckUsernameOrEmail
            : stepCounter === 2
            ? handleInputOTP
            : stepCounter === 3 && handleInputNewPassword
        }
      >
        {stepCounter === 1 ? (
          <>
            <Input type="text" htmlFor="username_or_email" classLabel="focus-green">
              <h3>Username or Email</h3>
            </Input>
            <Button label="Konfirmasi" className="bg-green" onClick={handleCheckUsernameOrEmail} />
          </>
        ) : stepCounter === 2 ? (
          <>
            <p>Kode OTP dikirim ke email {dataUser.username_or_email}.</p>
            <div className="input-wrapper grid">
              <Input type="text" htmlFor="otp" classLabel="focus-green">
                <h3>OTP CODE</h3>
              </Input>
              {disableReqOTP ? <p>02:00</p> : <Button label="Minta OTP" />}
            </div>
            <div className="action-wrapper flex">
              <Button label="Kembali" className="bg-red" onClick={handleBack} />
              <Button label="Konfirmasi" className="bg-green" onClick={handleInputOTP} />
            </div>
          </>
        ) : (
          <>
            <Input type="text" htmlFor="new_password" classLabel="focus-green">
              <h3>New Password</h3>
            </Input>
            <Input type="text" htmlFor="confirm_password" classLabel="focus-green">
              <h3>Confirm Password</h3>
            </Input>
            <Input.Checkbox label="Show Password" onChange={handleShowPassword} />
            <Button label="Save Changes" className="bg-green" onClick={handleInputNewPassword} />
          </>
        )}
      </Form>
    </Container>
  );
};

export default ForgetPassword;

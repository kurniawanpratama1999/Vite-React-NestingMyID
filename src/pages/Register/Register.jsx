// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useRef, useState } from "react";

// COMPONENT
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input, { Checkbox } from "../../components/Input/Input";
import Form from "../../components/Form/Form";

// UTILS
import { fetcher } from "../../utils/fetcher";

const Register = () => {
  const timeOutID = useRef(null);
  const navigate = useNavigate();

  // Message settings
  const [message, setMessage] = useState("");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  // Close popup
  const handleClose = (e) => {
    setShowMessage(false);
  };

  // Password toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [registerData, setRegisterData] = useState({
    display_name: " ",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearTimeout(timeOutID.current);
    const net = "http://localhost:3000/api/v1/auth/register";
    const method = "POST";
    const body = registerData;

    setShowMessage(true);
    fetcher({ method, net, body })
      .then((res) => {
        setCMessage(`${res.success}`);
        setMessage(res.message);
        if (res.success) {
          clearTimeout(timeOutID.current);
          timeOutID.current = setTimeout(() => navigate("/notification-after-register"), 2000);
        }
      })
      .catch((err) => {
        setCMessage(null);
        setMessage(err.message);
      })
      .finally(() => {
        timeOutID.current = setTimeout(() => setShowMessage(false), 10000);
      });
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        cMessage={cMessage}
        message={message}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        handleClose={handleClose}
      >
        <h3 className="text-center text-xl col-span-2">Cukup Satu Tautan</h3>

        <Input
          type="text"
          htmlFor="display_name"
          detail="display name :"
          focus="blue"
          value={registerData.display_name}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, display_name: target.value }))}
        />

        <Input
          type="text"
          htmlFor="username"
          detail="username :"
          focus="blue"
          value={registerData.username}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, username: target.value }))}
        />

        <Input
          classLabel="desktop:col-span-2"
          type="email"
          htmlFor="email"
          detail="email :"
          focus="blue"
          value={registerData.email}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, email: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          focus="blue"
          value={registerData.password}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, password: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm_password"
          detail="confirm password :"
          value={registerData.confirm_password}
          focus="blue"
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, confirm_password: target.value }))}
        />

        <Checkbox htmlFor="show-password" label="show password" className="desktop:col-span-2" onChange={handleShowPassword} />

        <Button id="handle-submit" label="Create Account" bgColor="blue" onClick={handleSubmit} className="desktop:col-span-2"/>

        <p className="text-sm text-center desktop:col-span-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Register;

// DEPENDENCIES
import { NavLink, useNavigate } from "react-router";
import { useRef, useState } from "react";

// COMPONENT
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input, { Checkbox } from "../../components/Input/Input";

// UTILS
import { fetcher } from "../../utils/fetcher";

const Login = () => {
  const timeOutID = useRef(null);
  const navigate = useNavigate();

  // Popup Message Setting
  const [message, setMessage] = useState("");
  const [cMessage, setCMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  // Close Popup
  const handleClose = () => {
    setShowMessage(false);
  };

  // Password Toggle show
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Collect Data
  const [dataLogin, setDataLogin] = useState({ username_or_email: "", password: "" });

  // ON SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearTimeout(timeOutID.current);
    const net = "http://localhost:3000/api/v1/auth/login";
    const method = "POST";
    const body = dataLogin;

    setShowMessage(true);
    fetcher({ method, net, body })
      .then((res) => {
        setCMessage(res.success);
        setMessage(res.message);
        if (res.success) {
          clearTimeout(timeOutID.current);
          timeOutID.current = setTimeout(() => navigate("/profile"), 3000);
        }
      })
      .catch((err) => {
        setCMessage(null);
        setMessage(err.message);
      })
      .finally(() => {
        timeOutID.current = setTimeout(() => setShowMessage(false), 60000);
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
        <h3 className="text-center text-xl">Cukup Satu Tautan</h3>
        <Input
          type="text"
          htmlFor="username"
          detail="username or email :"
          value={dataLogin.username_or_email}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, username_or_email: target.value }))}
        />

        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          detail="password :"
          value={dataLogin.password}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, password: target.value }))}
        />

        <Checkbox htmlFor="show-password" label="show password" onChange={handleShowPassword} />

        <Button label="Login" bgColor="green" />
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-700">
            Register
          </NavLink>
        </p>
      </Form>
      <NavLink to="/forget-password" className="text-sm mt-3 text-center">
        Forget password ?
      </NavLink>
    </Container>
  );
};

export default Login;

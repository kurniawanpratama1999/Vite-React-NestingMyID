import { NavLink, useNavigate } from "react-router";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

import "../../assets/styles/page_styles/03-Login/login.css";
import { useRef, useState } from "react";
import { fetcher } from "../../utils/fetcher";

const Login = () => {
  const [message, setMessage] = useState("");
  const [cMessage, setCMessage] = useState("hidden");
  const [showPassword, setShowPassword] = useState(false);
  const timeOutID = useRef(null);
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({ username_or_email: "", password: "" });

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearTimeout(timeOutID.current);
    const net = "http://localhost:3000/api/v1/auth/login";
    const method = "POST";
    const body = dataLogin;

    fetcher({ method, net, body })
      .then((res) => {
        setCMessage(`${res.success}`);
        setMessage(res.message);
        if (res.success) {
          clearTimeout(timeOutID.current);
          timeOutID.current = setTimeout(() => navigate("/profile"), 3000);
        }
      })
      .catch((err) => {
        setCMessage("false");
        setMessage(err.message);
      })
      .finally(() => {
        timeOutID.current = setTimeout(() => setCMessage("hidden"), 10000);
      });
  };
  return (
    <Container className="flex jc-center ai-center relative">
      <Form id="form-login" message={message} cMessage={cMessage} onSubmit={handleSubmit}>
        <Input
          type="text"
          htmlFor="username"
          classLabel="focus-green"
          value={dataLogin.username_or_email}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, username_or_email: target.value }))}
        >
          <h3>Username or Email</h3>
        </Input>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          classLabel="focus-green"
          value={dataLogin.password}
          onChange={({ target }) => setDataLogin((prev) => ({ ...prev, password: target.value }))}
        >
          <h3>Password</h3>
        </Input>
        <Input.Checkbox htmlFor="show-password" label="show password" onChange={handleShowPassword} />
        <Button label="Login" className="bg-green" />
        <p className="ask-user">
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Login;

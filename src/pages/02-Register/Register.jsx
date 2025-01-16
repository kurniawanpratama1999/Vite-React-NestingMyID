import { NavLink, useNavigate } from "react-router";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Form from "../../components/Form";
import "../../assets/styles/page_styles/02-Register/register.css";
import { useRef, useState } from "react";
import { fetcher } from "../../utils/fetcher";

const Register = () => {
  const [message, setMessage] = useState("");
  const [cMessage, setCMessage] = useState("hidden");
  const [showPassword, setShowPassword] = useState(false);
  const timeOutID = useRef(null);
  const navigate = useNavigate();

  // PEMBATAS
  const [registerData, setRegisterData] = useState({
    display_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearTimeout(timeOutID.current);
    const net = "http://localhost:3000/api/v1/auth/register";
    const method = "POST";
    const body = registerData;

    fetcher({ method, net, body })
      .then((res) => {
        setCMessage(`${res.success}`);
        setMessage(res.message);
        if (res.success) {
          clearTimeout(timeOutID.current);
          timeOutID.current = setTimeout(() => navigate('/profile'), 3000);
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
      <Form id="form-register" message={message} cMessage={cMessage} onSubmit={handleSubmit}>
        <Input
          type="text"
          htmlFor="display_name"
          value={registerData.display_name}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, display_name: target.value }))}
        >
          <h3>
            Your Name <span className="star-red">*</span>
          </h3>
        </Input>
        <Input
          type="text"
          htmlFor="username"
          value={registerData.username}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, username: target.value }))}
        >
          <h3>
            Username <span className="star-red">*</span>
          </h3>
        </Input>
        <Input
          type="email"
          htmlFor="email"
          value={registerData.email}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, email: target.value }))}
        >
          <h3>
            Email <span className="star-red">*</span>
          </h3>
        </Input>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="password"
          value={registerData.password}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, password: target.value }))}
        >
          <h3>
            Password <span className="star-red">*</span>
          </h3>
        </Input>
        <Input
          type={showPassword ? "text" : "password"}
          htmlFor="confirm_password"
          value={registerData.confirm_password}
          onChange={({ target }) => setRegisterData((prev) => ({ ...prev, confirm_password: target.value }))}
        >
          <h3>
            Confirm Password <span className="star-red">*</span>
          </h3>
        </Input>
        <Input.Checkbox htmlFor="show-password" label="show password" onChange={handleShowPassword} />
        <Button label="Create Account" onClick={handleSubmit} />
        <p className="ask-user">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default Register;

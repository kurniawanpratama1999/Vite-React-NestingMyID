import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { fetcher } from "../../utils/fetcher";
import { useNavigate, useParams } from "react-router";

const VerifyEmailAuth = () => {
  const [response, setResponse] = useState("Sedang Mencocokan Data");
  const { email, username, otp_encode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const method = "POST";
    const net = "http://localhost:3000/api/v1/auth/analys-email-activation";
    fetcher({ method, net, body: { email, username, otp_encode } })
      .then((resServer) => {
        setResponse(resServer.message);
        if (resServer.success) {
          setTimeout(() => {
            navigate("/profile");
          }, 3000);
        }
      })
      .catch((err) => setResponse(err.message));
  }, []);
  return <Container>{response}</Container>;
};

export default VerifyEmailAuth;

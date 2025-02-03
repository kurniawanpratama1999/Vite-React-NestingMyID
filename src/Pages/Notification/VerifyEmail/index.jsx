import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Container } from "@/Components";
import { hit_api } from "@/Utils/fetcher";

const VerifyEmailAuth = () => {
  const [response, setResponse] = useState("Sedang Mencocokan Data");
  const { email, username, otpCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const method = "GET";
    const net = `http://localhost:3000/api/v1/verify/register/${email}/${username}/${otpCode}`;
    hit_api({ method, net })
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

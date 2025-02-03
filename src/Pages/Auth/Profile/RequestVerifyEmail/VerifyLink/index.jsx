import { Container } from "@/Components";
import { hit_api } from "@/Utils/fetcher";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const VerifyLink = () => {
  const [response, setResponse] = useState({
    success: null,
    message: "Lading",
  });
  
  const navigate = useNavigate();
  const { email, username, otpCode } = useParams();
  useEffect(() => {
    const endPoint = `${email}/${username}/${otpCode}`;
    hit_api({
      method: "PUT",
      net: `http://localhost:3000/api/v1/auth/verify-email/${endPoint}`,
    }).then((res) => {
      setResponse(res);
      if (res.success) {
        setTimeout(() => navigate("/profile"), 2000);
      }
    });
  }, []);
  return response.success === null ? (
    <Container>Loading</Container>
  ) : (
    <Container>{response.message}</Container>
  );
};

export default VerifyLink;

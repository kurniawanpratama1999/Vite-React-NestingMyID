import { Container } from "@/Components";
import { hit_api } from "@/Utils/fetcher";
import { useEffect, useState } from "react";
const RequestVerifyEmail = () => {
  const [response, setResponse] = useState({
    success: null,
    message: "Loading",
  });

  useEffect(() => {
    hit_api({
      method: "PUT",
      net: "http://localhost:3000/api/v1/verify/verify-email",
    })
      .then((res) => setResponse(res))
      .catch((err) => setResponse({ success: false, message: "Server Error" }));
  }, []);
  return response.success === null ? (
    <Container>Loading</Container>
  ) : response.success ? (
    <Container className="grid">
      <p>Permintaan kamu berhasil terkirim.</p>
      <p>Silahkan check email untuk melakukan Aktivasi.</p>
    </Container>
  ) : (
    <Container>{response.message}</Container>
  );
};

export default RequestVerifyEmail;

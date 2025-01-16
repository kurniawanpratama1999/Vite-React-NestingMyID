import Container from "../../components/Container";
import "../../assets/styles/page_styles/12-Logout-auth/logout.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";

const Logout = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Pesan dari developer");

  useEffect(() => {
    const method = "DELETE";
    const net = "http://localhost:3000/api/v1/user/logout";
    fetcher({ method, net })
      .then((res) => {
        setMessage(res.message);
        if (res.success) {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => setMessage(err.message));
  }, []);
  return (
    <Container id="logout" className="flex">
      <p>{message}</p>
      <p>Jangan Lupa Kembali Lagi</p>
    </Container>
  );
};

export default Logout;

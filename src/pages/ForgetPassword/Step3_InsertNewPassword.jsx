import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import { useParams } from "react-router";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import formStyles from "../../components/Form/form";

const Step3_InsertNewPassword = () => {
  const [isMatching, setIsMatching] = useState({ success: false, message: "" });

  const { email, username, otp } = useParams();

  useEffect(() => {
    const method = "POST";
    const net = "http://localhost:3000/api/v1/user/forget-password-analys-otp";
    const body = { email, username, otp_encode: otp };
    fetcher({ method, net, body })
      .then((res) => {
        console.log(res);
        setIsMatching((prev) => ({ ...prev, success: res.success, message: res.message }));
      })
      .catch((err) => setIsMatching({ success: false, message: err }));
  }, []);

  return (
    <Container>
      {isMatching.success ? (
        <form className={formStyles.form({})}>
          <Input htmlFor="new-password" detail="New Password :" focus="blue" />
          <Input htmlFor="confirm-password" detail="Confirm Password :" focus="blue" />
          <Button bgColor="blue" label='Save Change'/>
        </form>
      ) : (
        isMatching?.message
      )}
    </Container>
  );
};

export default Step3_InsertNewPassword;

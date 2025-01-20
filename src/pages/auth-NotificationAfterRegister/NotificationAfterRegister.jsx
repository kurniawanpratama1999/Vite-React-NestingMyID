import { useContext } from "react";
import Container from "../../components/Container/Container";
import { ProfileContext } from "../../contexts/Contexts";

const NotificationAfterRegister = () => {
  const profileContext = useContext(ProfileContext);
  return (
    <Container id="NotificationAfterRegister" className="flex jc-center ai-center relative">
      <h5 className="text-2xl">Pendaftaran Berhasil</h5>
      <p className="text-xl">Silakan check email {profileContext?.email} untuk melakukan aktivasi melalui link yang sudah kami kirimkan.</p>
    </Container>
  );
};

export default NotificationAfterRegister;

import { useContext } from "react";
import { HookContext } from "@/Contexts/CreateContext";
import { BiCheckCircle } from "react-icons/bi";
import { Container } from "@/Components";

const NotificationAfterRegister = () => {
  const profileContext = useContext(HookContext);
  return (
    <Container>
      <h5 className="text-2xl flex justify-center items-center gap-2 font-bold py-2 px-3 bg-green-500 text-green-100 rounded">
        <BiCheckCircle className="text-4xl" />
        Pendaftaran Anda Berhasil
      </h5>
      <div className="mt-4 ">
        <p className="text-xl">
          Silakan check <b>pesan masuk</b> atau <b>spam email</b>{" "}
          {profileContext?.email}
        </p>
        <p className="text-xl">Kami mengirimkan anda link aktivasi</p>
      </div>
    </Container>
  );
};

export default NotificationAfterRegister;

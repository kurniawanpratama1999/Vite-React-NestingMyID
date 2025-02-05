import { useContext } from "react";
import { HookContext } from "@/Contexts";
import { Container } from "@/Components";

const Nofitication_ForgetPassword = () => {
  const { email, username } = useContext(HookContext);
  return (
    <Container className="gap-y-7 place-content-center px-20 text-xl">
      <p>
        Hai {username}, Kami mengirim kamu link ke email {email} untuk menggati
        password. Silakan check pesan masuk atau spam email kamu.
      </p>
      <p>
        Jika kode OTP tidak terkirim, kemungkinan kamu salah memasukan email
        saat registrasi. Silakan login dengan email lama, jika kamu belum login,
        lalu pergi ke menu profile dan klik Email untuk mengganti email.
      </p>
    </Container>
  );
};

export default Nofitication_ForgetPassword;

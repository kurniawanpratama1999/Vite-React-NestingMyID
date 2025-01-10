import Container from "../../components/Container";
import "../../assets/styles/page_styles/01-Home/home.css";
import Comp_Card from "./Comp_Card";

const Home = () => {
  return (
    <Container id="home" className="flex center">
      <h1 className="heading">
        <span>Satu Tautan</span>
        <span>Terhubung Tanpa Batas</span>
      </h1>
      <p className="afirmation">
        Kini Mengelola Alamat Web menjadi lebih mudah, {window.origin} membantu anda untuk menampung semua Alamat Web
        menjadi Satu. Daftar lalu rasakan kemudahannya.
      </p>
      <div className="card-wrapper flex flex-wrap">
        <Comp_Card iconType={1} title="Satu Tautan">
          Semua Alamat Web bisa jadi satu.
        </Comp_Card>
        <Comp_Card iconType={2} title="Buat dan Bagikan">
          Biarkan orang lain melihat.
        </Comp_Card>
        <Comp_Card iconType={3} title="Coba Gratis">
          Daftar dan coba sekarang.
        </Comp_Card>
      </div>
    </Container>
  );
};

export default Home;

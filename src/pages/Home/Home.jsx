import Container from "../../components/Container/Container";
import Comp_Card from "./Comp_Card";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Satu Tautan Terhubung Tanpa Batas. Kini Mengelola Alamat Web menjadi lebih mudah, Nesting My ID membantu anda untuk menampung semua
          Alamat Web menjadi Satu. Daftar lalu rasakan kemudahannya.`}
        />
      </Helmet>

      <Container id="home">
        <h2 className="heading">
          <span>Satu Tautan</span>
          <span>Terhubung Tanpa Batas</span>
        </h2>
        <p className="afirmation">
          Kini Mengelola Alamat Web menjadi lebih mudah, Nesting My ID membantu anda untuk menampung semua Alamat Web
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
    </>
  );
};

export default Home;

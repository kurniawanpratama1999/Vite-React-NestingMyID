import { useState } from "react";
import { Container } from "@/Components/";
import Comp_Card from "./Card";

const Collection = () => {
  const [linkCollection, setLinkCollection] = useState([
    {
      id: 1,
      link: "fa8ad3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, sit.",
      updatedAt: "13/01/2024",
      expiredAt: "13/02/2024",
    },
  ]);
  return (
    <Container id="collection" className="grid">
      <h4 className="welcome">Selamat Datang Display Name</h4>
      <p className="info">
        Tambah, Edit, Hapus, dan Bagikan Tautan yang kamu miliki
      </p>
      <div className="cards">
        {linkCollection.map((collection, index) => (
          <Comp_Card key={index} collection={collection} />
        ))}
      </div>
    </Container>
  );
};

export default Collection;

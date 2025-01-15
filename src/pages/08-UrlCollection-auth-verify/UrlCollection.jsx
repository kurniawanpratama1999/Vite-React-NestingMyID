import { useState } from "react";
import Container from "../../components/Container";
import { BiLogoInstagram } from "react-icons/bi";

import "../../assets/styles/page_styles/08-UrlCollection/urlCollection.css";

const UrlCollection = () => {
  const [urlCollection, setUrlCollection] = useState([
    {
      id: 1,
      logo: "",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat velit quam repudiandae necessitatibus accusamus soluta hic praesentium ea sequi sit!",
      url: "https://instagram.com/its.about.tofu",
    },
  ]);
  return (
    <Container id="urlCollection" className="grid">
      <h5> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, culpa!</h5>
      <div className="cards">
        {urlCollection.map((collection) => (
          <div className="card-wrapper">
            <div className="icon-wrapper">
              <BiLogoInstagram className="icon"/>
            </div>
            <p className="url">{collection.url}</p>
            <p className="details">{collection.details}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UrlCollection;

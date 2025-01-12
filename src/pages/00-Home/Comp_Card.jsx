import { BiLinkAlt, BiPlus, BiUser } from "react-icons/bi";

import "../../assets/styles/page_styles/01-Home/comp_card.css";

const Comp_Card = ({ iconType = 1, title = "varchar", children }) => {
  return (
    <article className="card">
      <span className="icon flex">{iconType === 1 ? <BiLinkAlt /> : iconType === 2 ? <BiPlus /> : <BiUser />}</span>
      <div className="wrapper">
        <h2 className="title">{title}</h2>
        <p className="description">{children}</p>
      </div>
    </article>
  );
};

export default Comp_Card;

import React, { useState } from "react";
import Button from "../../components/Button";
import { BiDotsHorizontal } from "react-icons/bi";

const Comp_Card = ({ collection }) => {
  const [isShowListAction, setShowListAction] = useState(false);
  const handleDotsMenu = (e) => setShowListAction(true);
  const handleDelete = (e) => {};
  const handleEdit = (e) => {};
  const handleBack = (e) => setShowListAction(false);

  return (
    <article className={`card-wrapper-${collection.id} relative`}>
      <button className="dots-menu" onClick={handleDotsMenu}>
        <BiDotsHorizontal />
      </button>
      <div className={`actions-wrapper-${collection.id} ${isShowListAction || "hidden" }`}>
        <Button id={`hapus-${collection.id}`} className="bg-red" label="Hapus" />
        <Button id={`edit-${collection.id}`} label="Edit" />
        <Button id={`bagikan-${collection.id}`} className="bg-green" label="Bagikan" />
        <Button id={`kembali-${collection.id}`} label="" onClick={handleBack}/>
      </div>
      <div className={`main-wrapper-${collection.id}`}>
        <h5>{collection.link}</h5>
        <p>{collection.description}</p>
      </div>
      <div className={`date-wrapper-${collection.id}`}>
        <p title="Update At">{collection.updatedAt}</p>
        <p title="Expired At">{collection.expiredAt}</p>
      </div>
    </article>
  );
};

export default Comp_Card;

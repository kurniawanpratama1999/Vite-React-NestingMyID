import React, { useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "../../assets/styles/page_styles/06-CreateAndUpdate/createAndUpdate.css";

import { useLocation } from "react-router";
import { BiRefresh, BiSolidTrash } from "react-icons/bi";

const CreateAndUpdate = () => {
  const { pathname } = useLocation();

  const [counterCollection, setCounterCollection] = useState(1);
  const [description, setDescription] = useState("");
  const [urlCollection, setUrlCollection] = useState([
    { id: 1, logo: "", details: "", url: "" },
    { id: 2, logo: "", details: "", url: "" },
    { id: 3, logo: "", details: "", url: "" },
  ]);

  const focusColor = pathname.includes("create") ? "focus-green" : "focus-blue";
  return (
    <Container className="static">
      <Form id="createAndUpdate">
        <Input element="textarea" htmlFor="description" classLabel={`${focusColor}`}>
          <h3>Description</h3>
        </Input>
        {urlCollection.map((collection) => (
          <div key={collection.id} className="inputs wrapper relative grid">
            <Input htmlFor={`logo-${collection.id}`} classLabel={`${focusColor}`}>
              <h3>Logo</h3>
            </Input>
            <Input htmlFor={`details-${collection.id}`} classLabel={`${focusColor}`}>
              <h3>Details</h3>
            </Input>
            <Input htmlFor={`url-${collection.id}`} classLabel={`${focusColor}`}>
              <h3>Url</h3>
            </Input>
            <Button id={`delete-${collection.id}`} className="bg-red" label={<BiSolidTrash className="icon trash" />} />
            <Button id={`clear-${collection.id}`} className="bg-gray" label={<BiRefresh className="icon refresh" />} />
          </div>
        ))}
        <div className="actions wrapper flex">
          <Button className="bg-green" label="Simpan" />
          <Button label="Tambah" />
        </div>
      </Form>
    </Container>
  );
};

export default CreateAndUpdate;

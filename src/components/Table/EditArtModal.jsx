import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
} from "reactstrap";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
// import * as FormData from "form-data";
import axios from "axios";
function EditArtModal(props) {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/marcalanstestcloud/upload";
  const CLOUDINARY_UPLOAD_PRESET = "ij2v1vwd";
  const { go } = useHistory();
  const { art, modal, toggle } = props;
  const clientid = "cf30ab951c235bf";
  const [indart, setNewArt] = useState({
    id: art.id,
    type_id: art.type_id,
    title: art.title,
    price: art.price,
    size: art.size,
    description: art.description,
    src: art.src,
    alt: art.alt,
    custom: art.custom,
    tags: art.tags
  });
  const [tags, setTags] = useState("");
  const handleTags = (event) => {
    setTags(event.target.value);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setNewArt({ ...indart, [event.target.name]: event.target.value });
    console.log(indart)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newArt = {
      ...indart,
      type_id: parseInt(art.type_id),
      price: parseFloat(art.price),
      tags: tags,
    };
    axiosWithAuth()
      .patch(`/art/${art.id}`, newArt)
      .then((resp) => {
        console.log(resp);
        go(0);
      })
      .catch(console.log);
  };
  const handleUpload = async (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    await axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www.form-urlencoded",
      },
      data: formData,
    })
      .then((res) => {
        setNewArt({ ...indart, src: res.data.secure_url });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Edit {art.title}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} style={{ padding: "2%" }}>
            <FormGroup>
              <Label for="type">Select Type</Label>
              <Input
                type="select"
                name="type_id"
                id="type_id"
                value={indart.type_id}
                onChange={handleChange}
              >
                <option value={0}>Painting</option>
                <option value={1}>Rock Art</option>
                <option value={2}>Home Decor</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={indart.title}
                onChange={handleChange}
              />
            </FormGroup>
            <Row>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  value={indart.price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="size">Size</Label>
                <Input
                  type="text"
                  name="size"
                  id="size"
                  value={indart.size}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={indart.description}
                onChange={handleChange}
              />
            </FormGroup>
            {indart.src ? (
              <img style={{ height: "200px", width: "200px" }} src={indart.src} />
            ) : (
              <></>
            )}
            <FormGroup>
              <Label for="src">Image Source</Label>
              <Input
                type="file"
                name="src"
                id="src"
                // value={art.src}
                onChange={handleUpload}
              />
            </FormGroup>
            <FormGroup>
              <Label for="art">Image Short Description</Label>
              <Input
                type="text"
                name="alt"
                id="alt"
                value={indart.alt}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tags">Tags</Label>
              <Input
                type="text"
                name="tags"
                id="tags"
                value={indart.tags}
                onChange={handleTags}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                name="custom"
                id="custom"
                value={indart.custom}
              />
              <Label for="custom">Customizeable?</Label>
            </FormGroup>
            <Button>Save</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditArtModal;

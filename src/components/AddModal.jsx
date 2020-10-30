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
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory} from "react-router-dom"
// import * as FormData from "form-data";
import axios from "axios";
function AddModal(props) {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/marcalanstestcloud/upload";
  const CLOUDINARY_UPLOAD_PRESET = "ij2v1vwd";
  const { go } = useHistory()
  const { modal, toggle } = props;
  const clientid = "cf30ab951c235bf";
  const [art, setNewArt] = useState({ type_id: 0, title: "", price: 0.00, size: "", description: "", src: "", alt: "", custom: false });
  const [tags, setTags] = useState("")
  const handleTags = (event) => { 
    setTags(event.target.value)
  }
  const handleChange = (event) => {
    setNewArt({ ...art, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newArt = { ...art, type_id: parseInt(art.type_id), price: parseFloat(art.price), tags: tags }
    axiosWithAuth()
      .post("/art", newArt)
      .then((resp) => {
        console.log(resp);
        go(0)
      })
      .catch(console.log);
  };
  const handleUpload = async (event) => {
    event.preventDefault();
    let file = event.target.files[0]
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    await axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www.form-urlencoded'
      },
      data: formData
    }).then(res => { setNewArt({ ...art, src: res.data.secure_url }); })
      .catch(err => console.log(err))
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Add New - {art.title}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} style={{ padding: "2%" }}>
            <FormGroup>
              <Label for="type">Select Type</Label>
              <Input
                type="select"
                name="type_id"
                id="type_id"
                value={art.type_id}
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
                value={art.title}
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
                  value={art.price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="size">Size</Label>
                <Input
                  type="text"
                  name="size"
                  id="size"
                  value={art.size}
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
                value={art.description}
                onChange={handleChange}
              />
            </FormGroup>
            {art.src ? <img style={{height: "200px", width: "200px"}}src={art.src} /> : <></>}
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
                value={art.alt}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tags">Tags</Label>
              <Input type="text"
                name="tags"
                id="tags"
                value={tags}
                onChange={handleTags}
                />
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                name="custom"
                id="custom"
                value={art.custom}
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

export default AddModal;

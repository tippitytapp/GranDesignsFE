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
  Row
} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth"
function AddModal(props) {
    const { setArt, modal, toggle } = props;
    const [art, setNewArt] = useState({})
    const handleChange = event => { 
        setNewArt({...art, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => { 
        event.preventDefault();
        console.log(art)
        axiosWithAuth().post('/art', art).then(resp => { console.log(resp)}).catch(console.log)
    }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Edit {art.title}</ModalHeader>
        <ModalBody>
                  <Form onSubmit={handleSubmit} style={{padding: "2%"}}>
            <FormGroup>
              <Label for="type">Select Type</Label>
              <Input
                type="select"
                name="type_id"
                id="type_id"
                value={art.type_id}
                onChange={handleChange}
              >
                <option value={1}>Painting</option>
                <option value={2}>Rock Art</option>
                <option value={3}>Home Decor</option>
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
            <FormGroup>
              <Label for="src">Image Source</Label>
              <Input
                type="file"
                name="src"
                id="src"
                value={art.src}
                onChange={handleChange}
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

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
} from "reactstrap";

function EditArtModal(props) {
  const { art, modal, toggle } = props;
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Edit {art.title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" value={art.title} />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="number" name="price" id="price" value={art.price} />
            </FormGroup>
            <FormGroup>
              <Label for="size">Size</Label>
              <Input type="text" name="size" id="size" value={art.size} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={art.description}
              />
            </FormGroup>
            <img style={{ height: "150px", width: "150px" }} src={art.src} alt={art.alt} />
            <FormGroup>
              <Label for="src">Image Source</Label>
              <Input type="file" name="src" id="src"/>
            </FormGroup>
            <FormGroup>
              <Label for="art">Image Short Description</Label>
              <Input type="text" name="alt" id="alt" value={art.alt} />
            </FormGroup>
            <FormGroup>
              <Label for="custom">Customizeable?</Label>
              <Input
                type="checkbox"
                name="custom"
                id="custom"
                value={art.custom}
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Select Type</Label>
              <Input
                type="select"
                name="type_id"
                id="type_id"
                value={art.type_id}
              >
                <option value={1}>Painting</option>
                <option value={2}>Rock Art</option>
                <option value={3}>Home Decor</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditArtModal;

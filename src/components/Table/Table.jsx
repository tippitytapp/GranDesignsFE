import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import EditArtModal from "./EditArtModal";
import AddModal from "../AddModal";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

function ArtTable(props) {
  const { art, setArt } = props;
  // CODE FOR THE EDIT MODAL
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [addModal, setAddModal] = useState(false);
  const addToggle = () => setAddModal(!addModal);
  const delArt = (id) => {
    axiosWithAuth()
      .delete(`/art/${id}`)
      .then((resp) => setArt(resp.data))
      .catch(console.log);
  };
  const renderArt = (art, index) => {
    return (
      <tr key={index}>
        <td>{art.title}</td>
        <td>{art.price}</td>
        <td>{art.type}</td>
        <td>{art.custom ? art.custom : "No"}</td>
        <td>View</td>
        <td>
          <p style={{ color: "orange", cursor: "pointer" }} onClick={toggle}>
            Edit
            {modal ? (
              <EditArtModal
                key={art.id}
                art={art}
                modal={modal}
                toggle={toggle}
              />
            ) : (
              <> </>
            )}
          </p>
        </td>
        <td>
          <p
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              console.log("DELETE", art.id);
              delArt(art.id);
            }}
          >
            Delete
          </p>
        </td>
      </tr>
    );
  };

  return (
    <div className="adminTable">
      <Button onClick={addToggle}>Add Art</Button>
      {addModal ? (
        <AddModal toggle={addToggle} modal={addModal} setArt={setArt} />
      ) : (
        <> </>
      )}
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Type</th>
            <th>Customizable</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{art.length ? art.map(renderArt) : <></>}</tbody>
      </Table>
    </div>
  );
}
export default ArtTable;

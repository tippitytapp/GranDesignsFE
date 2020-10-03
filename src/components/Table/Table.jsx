import React, { useState }from "react";
import { Table, Modal } from "reactstrap";
import axios from "axios";
import EditArtModal from "./EditArtModal"

function ArtTable(props) { 
    const { art, setArt } = props
    // CODE FOR THE EDIT MODAL
  const [modal, setModal] = useState(false);
  const toggle = () => { setModal(!modal); console.log(modal) }
  
    const delArt = (id) => { 
        axios.delete(`http://localhost:5151/art/${id}`).then(resp => setArt(resp.data)).catch(console.log)
    }
    const renderArt = (art, index)=>{ 
        return (
          <tr key={index}>
            <td>{art.title}</td>
            <td>{art.price}</td>
            <td>{art.type}</td>
            <td>{art.custom ? art.custom : "No"}</td>
            <td>View</td>
            <td>
              <p style={{ color: "orange", cursor: "default" }}
                onClick={toggle}>Edit
                {modal ? <EditArtModal key={art.id} art={art} modal={modal} toggle={toggle}/> : <> </>}</p>
            </td>
            <td>
              <p
                style={{ color: "red", cursor: "default" }}
                onClick={() => delArt(art.id)}
              >
                Delete
              </p>
            </td>
          </tr>
        );
    }

    return (
      <div className="adminTable">
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
          <tbody>
            {art.map(renderArt)}
          </tbody>
        </Table>
        
      </div>
    );
}
export default ArtTable;
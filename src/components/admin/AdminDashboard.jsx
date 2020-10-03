import React, { useEffect, useState} from "react";
import axios from "axios"
import ArtTable from "../Table/Table"


function AdminDashboard() { 
    const [art, setArt] = useState([])
    useEffect(() => { 
        axios.get('http://localhost:5151/art')
            .then(res => setArt(res.data))
            .catch(console.log)
    },[])
    return (
      <div>
            Admin Portal Coming Soon!
            <ArtTable art={art} setArt={setArt} />
      </div>
    );
}

export default AdminDashboard;
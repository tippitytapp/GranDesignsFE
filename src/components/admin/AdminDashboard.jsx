import React, { useEffect, useState} from "react";
import ArtTable from "../Table/Table"
import { axiosWithAuth } from "../../utils/axiosWithAuth"


function AdminDashboard() { 
    const [art, setArt] = useState([])
    useEffect(() => { 
        axiosWithAuth().get('/art')
            .then(res => setArt(res.data))
            .catch(console.log)
    },[])
    return (
      <div>
            <ArtTable art={art} setArt={setArt} />
      </div>
    );
}

export default AdminDashboard;
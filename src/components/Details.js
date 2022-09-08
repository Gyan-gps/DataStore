import * as React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContextData } from "./Context/Context";

export default function Details() {

  const nav = useNavigate();
  const {
    alertData,
    setAlertData,
    action,
    setAction,
    personsData,
    setPersonsData,
  } = useContextData();

  const [personData, setPersonData, ] = React.useState([]);
  const { id } = useParams();
  
  const getpersonData = () => {
    setPersonData(personsData[id])
  };

  React.useEffect(() => {
    getpersonData();
  }, []);

  const deleteperson = ()=>{
    personsData.splice(id,1);
    setPersonsData(personsData);
    localStorage.setItem("persons", JSON.stringify(personsData));
    setAlertData(" deleted successfully.");
    setAction("Data");    
    nav("/");
  }

  
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-header mb-2">
          <h5><b>{personData.name}</b> Details</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mt-2 mb-2">
            Name: <b>{personData.name}</b>
          </li>
          <li className="list-group-item  mb-2">
            F/H Name: <b>{personData.f_h_name}</b>
          </li><li className="list-group-item  mb-2">
            Gender: <b>{personData.gender}</b>
          </li>
          <li className="list-group-item  mb-2">
            Adhaar No: <b>{personData.adhar}</b>
          </li>
          <li className="list-group-item  mb-2">
            Voter Id: <b>{personData.voter}</b>
          </li>
          <li className="list-group-item  mb-2">
            Mpbile No: <b>{personData.mobile}</b>
          </li>
          <li className="list-group-item  d-flex justify-content-around mt-2 mb-2">
            <NavLink to={`/updateperson/${id}`}>
              <button className="btn btn-success">
                <CreateIcon />
              </button>
            </NavLink>
            <button className="btn btn-danger"
            onClick={()=>deleteperson(id)}
            >
              <DeleteOutlineIcon />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

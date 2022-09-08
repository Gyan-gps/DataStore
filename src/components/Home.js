import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { useContextData } from "./Context/Context";

const Home = () => {
  const {
    alertData,
    setAlertData,
    action,
    setAction,
    personsData,
    setPersonsData,
  } = useContextData();

  const deleteperson = (id) => {
    personsData.splice(id,1);
    setPersonsData(personsData);
    localStorage.setItem("persons", JSON.stringify(personsData));
    setAlertData(" deleted successfully.");
    setAction("Data");
  };

  return (
    <>
      {alertData ? (
        <div className="alert alert-success" role="alert">
          <p>
            <b>{action}</b>
            {alertData}{" "}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2">
            <NavLink className="btn btn-primary" to="/resister">
              Add Data
            </NavLink>
          </div>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">F/H Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Mobile No.</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {personsData.map((dt, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{dt.name}</td>
                    <td>{dt.gender}</td>
                    <td>{dt.f_h_name}</td>
                    <th scope="col">{dt.mobile}</th>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/details/${idx}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`/updateperson/${idx}`}>
                        <button className="btn btn-success">
                          <CreateIcon />
                        </button>
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteperson(idx)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;

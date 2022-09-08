import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContextData } from "./Context/Context";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    alertData,
    setAlertData,
    action,
    setAction,
    personsData,
    setPersonsData,
  } = useContextData();

  const [inputValue, setInputValue] = useState({
    name: "",
    f_h_name: "",
    gender: "",
    adhar: "",
    voter: "",
    mobile: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setInputValue((x) => {
      return {
        ...x,
        [name]: value,
      };
    });
  };

  const getpersonData = async () => {
    setInputValue(personsData[id]);
  };

  React.useEffect(() => {
    getpersonData();
  }, []);

  const updateData = () => {
    personsData.splice(id,1,inputValue)
    localStorage.setItem("persons", JSON.stringify(personsData));
    setAlertData(" data edit succssfully.");
    setAction(inputValue.name);
    // console.log(inputValue.name);
    navigate("/");
  };

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form>
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={setData}
              value={inputValue.name}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="name" className="form-label">
              Father or Husband Name
            </label>
            <input
              onChange={setData}
              value={inputValue.f_h_name}
              type="text"
              name="f_h_name"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="name" className="form-label">
              Gender
            </label>
            <input
              onChange={setData}
              value={inputValue.gender}
              type="text"
              name="gender"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="Addaar No." className="form-label">
              Adhaar No.
            </label>
            <input
              onChange={setData}
              value={inputValue.adhar}
              name="adhar"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="Voter Id" className="form-label">
              Voter Id
            </label>
            <input
              onChange={setData}
              value={inputValue.voter}
              name="voter"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="Mobile No." className="form-label">
              Mobile No.
            </label>
            <input
              onChange={setData}
              value={inputValue.mobile}
              name="mobile"
              type="text"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            onClick={updateData}
            className="btn btn-primary "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

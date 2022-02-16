import React from "react";
import Resumenav from "../Navbars/Resumenav";
import { useState, useEffect } from "react";
import axios from "axios";
const ref = React.createRef();

function Resume() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    // check if user is logged in or not
    axios
      .post("http://localhost:8000/resume", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        const status = res.data.status;
        if (status === false) {
          window.location.href = "/";
        } else {
          // setLoader(false);
        }
      })
      .catch((err) => console.log("Some error occured " + err));

    // get personal details
    axios
      .post("http://localhost:8000/getpersonaldetails", { token: token })
      .then((res) => {
        const datas = res.data[0];
        if (res.data.length > 0) {
          let obj = {
            rname: datas.resumeName,
            uname: datas.name,
            hline: datas.headLine,
            address: datas.address,
            pnumber: datas.phoneNumber,
            city: datas.city,
            email: datas.email,
            linkedin: datas.linkedIn,
          };
          setPinfo(obj);
        }
      })
      .catch((err) => {
        console.log("Some error occured " + err);
      });
  }, [token]);
  // handle submits
  const handlePersonalSubmit = () => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8000/personaldetails", { pinfo, token: token })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Some error occured " + err));
  };
  const handleEducationSubmit = (i) => {
    console.log(edu);
  };
  // states
  let [edu, setEdu] = useState([
    {
      eedu: "",
      ecity: "",
      edesc: "",
      esdate: "",
      eddate: "",
    },
  ]);
  let [emp, setEmp] = useState([
    {
      ework: "",
      eloc: "",
      estart: "",
      eend: "",
      edesc: "",
    },
  ]);
  let [int, setInt] = useState([
    {
      iwork: "",
      iloc: "",
      istart: "",
      iend: "",
      idesc: "",
    },
  ]);

  let [pinfo, setPinfo] = useState({
    rname: "My Resume",
    uname: "",
    hline: "",
    address: "",
    pnumber: "",
    city: "",
    email: "",
    linkedin: "",
  });

  let [lang, setLang] = useState("");

  let [skill, setSkill] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
  });

  let [achi, setAchi] = useState("");

  const handleChange = (e, i) => {
    let { name, value } = e.target;
    let list = [...edu];
    list[i][name] = value;
    setEdu(list);
  };

  const handleEduClick = () => {
    let list = [
      ...edu,
      {
        eedu: "",
        ecity: "",
        edesc: "",
        esdate: "",
        eddate: "",
      },
    ];
    setEdu(list);
  };

  const handleEmpChange = (e, i) => {
    let { name, value } = e.target;
    let list = [...emp];
    list[i][name] = value;
    setEmp(list);
  };

  const handleEmpClick = () => {
    let list = [
      ...emp,
      {
        ework: "",
        eloc: "",
        estart: "",
        eend: "",
        edesc: "",
      },
    ];
    setEmp(list);
  };

  const handleEmpDelete = (index) => {
    if (emp.length > 1) {
      let list = [...emp];
      list.splice(index, 1);
      setEmp(list);
    }
  };

  const handleEduDelete = (index) => {
    if (edu.length > 1) {
      let list = [...edu];
      list.splice(index, 1);
      setEdu(list);
    }
  };

  const handlePersonalInfo = (e) => {
    let { name, value } = e.target;
    let list = { ...pinfo };
    list[name] = value;
    setPinfo(list);
  };

  const handleIntChange = (e, i) => {
    let { name, value } = e.target;
    let list = [...int];
    list[i][name] = value;
    setInt(list);
  };

  const handleIntDelete = (index) => {
    if (int.length > 1) {
      let list = [...int];
      list.splice(index, 1);
      setInt(list);
    }
  };
  const handleIntAdd = () => {
    let list = [
      ...int,
      {
        iwork: "",
        iloc: "",
        istart: "",
        iend: "",
        idesc: "",
      },
    ];
    setInt(list);
  };

  const handleSkill = (e) => {
    let { name, value } = e.target;
    let list = { ...skill };
    list[name] = value;
    setSkill(list);
  };

  return (
    <>
      <Resumenav pref={ref} />
      <div className="maincont">
        {/* left side */}
        <div className="leftside">
          <div className="scroll">
            <div className="container" style={{ width: "94%" }}>
              <div class="accordion mt-4" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5>Personal Details</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {/* grid */}
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Resume Name
                              </span>
                              <input
                                type="text"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.rname}
                                name="rname"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Head line
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.hline}
                                name="hline"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Phone number
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.pnumber}
                                name="pnumber"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Email address
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.email}
                                name="email"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Name
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.uname}
                                name="uname"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                Address
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.address}
                                name="address"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                City
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.city}
                                name="city"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>

                            <div class="mb-3">
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "#52525A",
                                }}
                              >
                                LinkedIn
                              </span>
                              <input
                                type="email"
                                class="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={pinfo.linkedin}
                                name="linkedin"
                                onChange={(e) => handlePersonalInfo(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          class="btn btn-primary"
                          style={{
                            backgroundColor: "rgb(60, 0, 199)",
                            border: "none",
                            paddingRight: 26,
                            paddingLeft: 26,
                          }}
                          type="button"
                          onClick={() => handlePersonalSubmit()}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h5>Education</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {edu.map((ele, i) => {
                        return (
                          <>
                            <div className="edu mt-4">
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Education
                                </span>
                                <input
                                  type="email"
                                  class="form-control mt-2"
                                  id="exampleInputEmail1"
                                  name="eedu"
                                  aria-describedby="emailHelp"
                                  onChange={(e) => handleChange(e, i)}
                                  value={ele.eedu}
                                />
                              </div>
                              {/* education starts */}
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Institue name
                                </span>
                                <input
                                  type="email"
                                  class="form-control mt-2"
                                  name="ecity"
                                  value={ele.ecity}
                                  onChange={(e) => handleChange(e, i)}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              {/* grid here */}
                              <div class="container">
                                <div class="row">
                                  <div
                                    class="col"
                                    style={{ marginLeft: -10, marginRight: 26 }}
                                  >
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        Start Date
                                      </span>
                                      <input
                                        type="date"
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="esdate"
                                        value={ele.esdate}
                                        onChange={(e) => handleChange(e, i)}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        End date
                                      </span>
                                      <input
                                        type="date"
                                        name="eddate"
                                        onChange={(e) => handleChange(e, i)}
                                        value={ele.eddate}
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* grid end */}

                              <div class="mb-3 mt-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Description
                                </span>
                                <textarea
                                  class="form-control mt-2"
                                  id="exampleFormControlTextarea1"
                                  name="edesc"
                                  onChange={(e) => handleChange(e, i)}
                                  value={ele.edesc}
                                  rows="3"
                                ></textarea>
                                {edu.length > 1 ? (
                                  <button
                                    class="btn btn-light"
                                    style={{
                                      border: "1px solid rgb(0,0,0,0.5)",
                                      border: "none",
                                      paddingRight: 25,
                                      paddingLeft: 25,
                                      paddingTop: 8,
                                      marginLeft: 15,
                                      paddingBottom: 8,
                                      marginTop: 20,
                                      color: "black",
                                    }}
                                    type="button"
                                    onClick={() => handleEduDelete(i)}
                                  >
                                    <i
                                      class="far fa-trash-alt"
                                      style={{ marginRight: 10 }}
                                    ></i>
                                    Delete
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="addedu">
                        <button
                          class="btn btn-primary"
                          onClick={handleEduClick}
                          style={{
                            backgroundColor: "rgb(60, 0, 199)",
                            border: "none",
                            paddingRight: 26,
                            paddingLeft: 26,
                            paddingTop: 8,
                            paddingBottom: 8,
                          }}
                          type="button"
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* education ends */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseE"
                      aria-expanded="false"
                      aria-controls="collapseE"
                    >
                      <h5>Employment</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseE"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingE"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {/* Employement section */}
                      {emp.map((ele, i) => {
                        return (
                          <>
                            <div className="edu mt-4">
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Company
                                </span>
                                <input
                                  type="email"
                                  class="form-control mt-2"
                                  id="exampleInputEmail1"
                                  name="ework"
                                  aria-describedby="emailHelp"
                                  onChange={(e) => handleEmpChange(e, i)}
                                  value={ele.ework}
                                />
                              </div>
                              {/* education starts */}
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Work
                                </span>
                                <input
                                  type="email"
                                  class="form-control mt-2"
                                  name="eloc"
                                  value={ele.eloc}
                                  onChange={(e) => handleEmpChange(e, i)}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              {/* grid here */}
                              <div class="container">
                                <div class="row">
                                  <div
                                    class="col"
                                    style={{ marginLeft: -10, marginRight: 26 }}
                                  >
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        Start Date
                                      </span>
                                      <input
                                        type="date"
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="estart"
                                        value={ele.estart}
                                        onChange={(e) => handleEmpChange(e, i)}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        End date
                                      </span>
                                      <input
                                        type="date"
                                        name="eend"
                                        onChange={(e) => handleEmpChange(e, i)}
                                        value={ele.eend}
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* grid end */}

                              <div class="mb-3 mt-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Description
                                </span>
                                <textarea
                                  class="form-control mt-2"
                                  id="exampleFormControlTextarea1"
                                  name="edesc"
                                  onChange={(e) => handleEmpChange(e, i)}
                                  value={ele.edesc}
                                  rows="3"
                                ></textarea>

                                {emp.length > 1 ? (
                                  <button
                                    class="btn btn-light"
                                    style={{
                                      border: "1px solid rgb(0,0,0,0.5)",
                                      border: "none",
                                      paddingRight: 25,
                                      paddingLeft: 25,
                                      paddingTop: 8,
                                      marginLeft: 15,
                                      paddingBottom: 8,
                                      marginTop: 20,
                                      color: "black",
                                    }}
                                    type="button"
                                    onClick={() => handleEmpDelete(i)}
                                  >
                                    <i
                                      class="far fa-trash-alt"
                                      style={{ marginRight: 10 }}
                                    ></i>
                                    Delete
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="addedu">
                        <button
                          class="btn btn-primary"
                          onClick={handleEmpClick}
                          style={{
                            backgroundColor: "rgb(60, 0, 199)",
                            border: "none",
                            paddingRight: 26,
                            paddingLeft: 26,
                            paddingTop: 8,
                            paddingBottom: 8,
                          }}
                          type="button"
                        >
                          Add Employement
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      <h5>Internship</h5>
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {/* internship section left side */}
                      {int.map((ele, i) => {
                        return (
                          <>
                            <div className="edu mt-4">
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Company
                                </span>
                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  id="exampleInputEmail1"
                                  name="iwork"
                                  aria-describedby="emailHelp"
                                  onChange={(e) => handleIntChange(e, i)}
                                  value={ele.iwork}
                                />
                              </div>
                              {/* education starts */}
                              <div class="mb-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Work
                                </span>
                                <input
                                  type="text"
                                  class="form-control mt-2"
                                  name="iloc"
                                  value={ele.iloc}
                                  onChange={(e) => handleIntChange(e, i)}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              {/* grid here */}
                              <div class="container">
                                <div class="row">
                                  <div
                                    class="col"
                                    style={{ marginLeft: -10, marginRight: 26 }}
                                  >
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        Start Date
                                      </span>
                                      <input
                                        type="date"
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="istart"
                                        value={ele.istart}
                                        onChange={(e) => handleIntChange(e, i)}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div class="mb-2">
                                      <span
                                        style={{
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color: "#52525A",
                                        }}
                                      >
                                        End date
                                      </span>
                                      <input
                                        type="date"
                                        name="iend"
                                        onChange={(e) => handleIntChange(e, i)}
                                        value={ele.iend}
                                        class="form-control mt-2"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* grid end */}

                              <div class="mb-3 mt-2">
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#52525A",
                                  }}
                                >
                                  Description
                                </span>
                                <textarea
                                  class="form-control mt-2"
                                  id="exampleFormControlTextarea1"
                                  name="idesc"
                                  onChange={(e) => handleIntChange(e, i)}
                                  value={ele.idesc}
                                  rows="3"
                                ></textarea>

                                {int.length > 1 ? (
                                  <button
                                    class="btn btn-light"
                                    style={{
                                      border: "1px solid rgb(0,0,0,0.5)",
                                      border: "none",
                                      paddingRight: 25,
                                      paddingLeft: 25,
                                      paddingTop: 8,
                                      marginLeft: 15,
                                      paddingBottom: 8,
                                      marginTop: 20,
                                      color: "black",
                                    }}
                                    type="button"
                                    onClick={() => handleIntDelete(i)}
                                  >
                                    <i
                                      class="far fa-trash-alt"
                                      style={{ marginRight: 10 }}
                                    ></i>
                                    Delete
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="addedu">
                        <button
                          class="btn btn-primary"
                          onClick={handleIntAdd}
                          style={{
                            backgroundColor: "rgb(60, 0, 199)",
                            border: "none",
                            paddingRight: 26,
                            paddingLeft: 26,
                            paddingTop: 8,
                            paddingBottom: 8,
                          }}
                          type="button"
                        >
                          Add Internship
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseA"
                      aria-expanded="false"
                      aria-controls="collapseA"
                    >
                      <h5>Achievements</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseA"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {/* achievements left side */}
                      <div class="mb-3">
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#52525A",
                          }}
                        >
                          Achievements
                        </span>
                        <textarea
                          style={{ marginTop: 8 }}
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="achi"
                          value={achi}
                          onChange={(e) => setAchi(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h5>Skills</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="mb-2">
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#52525A",
                          }}
                        >
                          Skill 1
                        </span>
                        <input
                          type="text"
                          class="form-control mt-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="skill1"
                          value={skill.skill1}
                          onChange={handleSkill}
                        />
                      </div>
                      <div class="mb-2">
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#52525A",
                          }}
                        >
                          Skill 2
                        </span>
                        <input
                          type="text"
                          class="form-control mt-2"
                          id="exampleInputEmail1"
                          name="skill2"
                          value={skill.skill2}
                          onChange={handleSkill}
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-2">
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#52525A",
                          }}
                        >
                          Skill 3
                        </span>
                        <input
                          type="text"
                          class="form-control mt-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="skill3"
                          value={skill.skill3}
                          onChange={handleSkill}
                        />
                      </div>
                      <div class="mb-2">
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#52525A",
                          }}
                        >
                          Skill 4
                        </span>
                        <input
                          type="text"
                          class="form-control mt-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="skill4"
                          value={skill.skill4}
                          onChange={handleSkill}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseL"
                      aria-expanded="false"
                      aria-controls="collapseL"
                    >
                      <h5>Languages</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseL"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#52525A",
                        }}
                      >
                        Languages
                      </span>
                      <textarea
                        class="form-control mt-2"
                        id="exampleFormControlTextarea1"
                        name="edesc"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        value={lang}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="rightside">
          {/* resume */}
          <div className="resumebox" ref={ref}>
            <div className="resumehead">
              <div className="rhead">{pinfo.rname}</div>
              <div className="rpara">{pinfo.hline}</div>
              <div className="rlocal">
                <div className="rcity locals">
                  <i class="fas fa-map-marker-alt"></i>
                  <span className="ml">{pinfo.city}</span>
                </div>
                <div className="remail locals">
                  <i class="fas fa-envelope"></i>
                  <span className="ml">{pinfo.email}</span>
                </div>
                <div className="rphone locals">
                  <i class="fas fa-phone"></i>
                  <span className="ml">{pinfo.pnumber}</span>
                </div>
              </div>
            </div>
            {/* resume body */}
            <div className="rbody">
              <div className="rleft">
                {/* Eucation section */}
                <div className="education">
                  <span>Education</span>
                </div>

                {edu.map((ele) => {
                  return (
                    <>
                      <div className="education_sec">
                        <div className="eduname">
                          <span>{ele.eedu}</span>
                          <span>
                            <span style={{ marginRight: 5 }}>{ele.esdate}</span>
                            -<span style={{ marginLeft: 5 }}>{ele.eddate}</span>
                          </span>
                        </div>
                        <div className="edudesc" style={{ marginTop: 0 }}>
                          {ele.ecity}
                        </div>
                        <div
                          className="edudesc"
                          style={{ marginTop: 0.5, color: "black" }}
                        >
                          {ele.edesc}
                        </div>
                      </div>
                    </>
                  );
                })}

                <div className="bar">
                  <div className="fuck"></div>
                </div>

                {/* Employement section */}
                <div className="employement_section" style={{ marginTop: -5 }}>
                  <div className="education">
                    <span>Employement</span>
                  </div>
                  {/* --- */}
                  {emp.map((ele, i) => {
                    return (
                      <>
                        <div className="education_sec">
                          <div className="eduname">
                            <span>{ele.ework}</span>
                            <span>
                              <span style={{ marginRight: 5 }}>
                                {ele.estart}
                              </span>
                              -<span style={{ marginLeft: 5 }}>{ele.eend}</span>
                            </span>
                          </div>
                          <div className="edudesc" style={{ marginTop: 0 }}>
                            {ele.eloc}
                          </div>
                          <div
                            className="edudesc"
                            style={{ marginTop: 0.5, color: "black" }}
                          >
                            {ele.edesc}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="bar">
                  <div className="fuck"></div>
                </div>
                {/* Internship section */}
                <div className="employement_section" style={{ marginTop: -5 }}>
                  <div className="education">
                    <span>Internship</span>
                  </div>
                  {/* --- */}

                  {int.map((ele, i) => {
                    return (
                      <>
                        <div className="education_sec">
                          <div className="eduname">
                            <span>{ele.iwork}</span>
                            <span>
                              <span style={{ marginRight: 5 }}>
                                {ele.istart}
                              </span>
                              -<span style={{ marginLeft: 5 }}>{ele.iend}</span>
                            </span>
                          </div>
                          <div className="edudesc" style={{ marginTop: 0 }}>
                            {ele.iloc}
                          </div>
                          <div
                            className="edudesc"
                            style={{ marginTop: 0.5, color: "black" }}
                          >
                            {ele.idesc}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="bar">
                  <div className="fuck"></div>
                </div>
                {/* Achievements section */}
                <div className="employement_section" style={{ marginTop: -5 }}>
                  <div className="education">
                    <span>Achievements</span>
                  </div>
                  {/* --- */}
                  <div className="education_sec" style={{ paddingTop: 10 }}>
                    <div
                      className="edudesc"
                      style={{ marginTop: -1, color: "black" }}
                    >
                      {achi}
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <div className="fuck"></div>
                </div>
                {/* left end */}
              </div>
              {/* left end */}
              <div className="rright">
                {/* right side */}
                <div className="vbar"></div>
                <div className="rcontent">
                  <div className="education">
                    <span>Personal Details</span>
                  </div>

                  <div className="education_sec" style={{ marginTop: 7 }}>
                    <div className="edudesc">Name</div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 0.5, color: "black" }}
                    >
                      {pinfo.uname}
                    </div>
                  </div>

                  <div className="education_sec" style={{ marginTop: 7 }}>
                    <div className="edudesc">Email address</div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 0.5, color: "black" }}
                    >
                      {pinfo.email}
                    </div>
                  </div>

                  <div className="education_sec" style={{ marginTop: 7 }}>
                    <div className="edudesc">Phone number</div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 0.5, color: "black" }}
                    >
                      {pinfo.pnumber}
                    </div>
                  </div>

                  <div className="education_sec" style={{ marginTop: 7 }}>
                    <div className="edudesc">Address</div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 0.5, color: "black" }}
                    >
                      {pinfo.address}
                    </div>
                  </div>

                  <div className="education_sec" style={{ marginTop: 7 }}>
                    <div className="edudesc">LinkedIn</div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 0.5, color: "black" }}
                    >
                      {pinfo.linkedin}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="fuck" style={{ width: "77%" }}></div>
                  </div>
                  {/* skills section */}
                  <div className="education">
                    <span>Skills</span>
                  </div>
                  <div className="skillscont">
                    <div
                      className="edudesc"
                      style={{ marginTop: 7, color: "black" }}
                    >
                      {skill.skill1}
                    </div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 7, color: "black" }}
                    >
                      {skill.skill2}
                    </div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 7, color: "black" }}
                    >
                      {skill.skill3}
                    </div>
                    <div
                      className="edudesc"
                      style={{ marginTop: 7, color: "black" }}
                    >
                      {skill.skill4}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="fuck" style={{ width: "77%" }}></div>
                  </div>
                  {/* Languages section */}
                  <div className="education">
                    <span>Languages</span>
                  </div>
                  <div
                    className="edudesc"
                    style={{ marginTop: 7, width: "70%", color: "black" }}
                  >
                    {lang}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;

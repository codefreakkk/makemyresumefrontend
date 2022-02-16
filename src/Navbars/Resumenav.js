import React from "react";
import PDF from "react-to-pdf";
const options = {
  orientation: "portrait",
  unit: "in",
  format: [6.5, 4.3],
};

function Resumenav({ pref }) {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#1d1d20" }}
      >
        <div class="container-fluid" style={{ backgroundColor: "#1d1d20" }}>
          <button
            class="btn btn-outline-light"
            type="button"
            style={{
              border: "0.1px solid white",
              paddingRight: 26,
              paddingLeft: 26,
              paddingTop: 8,
              paddingBottom: 8,
              border: "0.1px solid #757575",
            }}
            onClick={() => {
              window.location.href = "/userdash";
            }}
          >
            <i class="fas fa-arrow-left" style={{ marginRight: 15 }}></i>
            Resumes
          </button>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav"
              style={{ position: "relative", left: 550, top: 0 }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{
                    fontSize: 18,
                    fontWeight: "light",
                    color: "#fff",
                    marginTop: 15,
                  }}
                ></a>
              </li>
            </ul>
            <div class="d-flex" style={{ position: "absolute", right: 20 }}>
              <button
                class="btn btn-outline-light"
                type="button"
                style={{
                  border: "0.1px solid white",
                  paddingRight: 26,
                  paddingLeft: 26,
                  paddingTop: 8,
                  paddingBottom: 8,
                  border: "0.1px solid #757575",
                }}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Save
              </button>
              <PDF targetRef={pref} filename="test.pdf" options={options}>
                {({ toPdf }) => (
                  <button
                    onClick={toPdf}
                    class="btn btn-primary"
                    style={{
                      marginLeft: 10,
                      backgroundColor: "rgb(60, 0, 199)",
                      border: "none",
                      paddingRight: 26,
                      paddingLeft: 26,
                      paddingTop: 8,
                      paddingBottom: 8,
                    }}
                    type="button"
                  >
                    Download
                  </button>
                )}
              </PDF>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Resumenav;

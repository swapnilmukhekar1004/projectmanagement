import React from "react";
import { Link } from "react-router-dom";


export default function Header() {

  return (
    <>
      <nav>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginTop: "6%" }}
            >
              <h5 className="text-white"> {"<"} Create Project</h5>
             
              <img src="img/Logo.svg" alt="logo"></img>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

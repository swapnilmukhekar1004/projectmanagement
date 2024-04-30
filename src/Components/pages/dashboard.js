import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectBarGraph from "./projectbargraph";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [closeProjectsCount, setCloseProjectsCount] = useState(0);
  const [runningProjectsCount, setrunningProjectsCount] = useState(0);
  const [cancelledProjectsCount, setcancelledProjectsCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  




  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/project");
      const projects = response.data;

      //project total count
      setProjects(projects);

      // Filter projects with status 'close'
      const closeProjects = projects.filter(
        (project) => project.status === "closed"
      );
      // Update state with the count of close projects
      setCloseProjectsCount(closeProjects.length);

      // Filter projects with status 'running'
      const runningProjects = projects.filter(
        (project) => project.status === "running"
      );
      // Update state with the count of running projects
      setrunningProjectsCount(runningProjects.length);

      // Filter projects with status 'cancelled'
      const cancelledProjects = projects.filter(
        (project) => project.status === "cancelled"
      );
      // Update state with the count of cancelled projects
      setcancelledProjectsCount(cancelledProjects.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate the total count of projects
  const totalCount = projects.length;

  return (
    <>
      <div>
        <div>
          <div className="MainContent">
            <div className="row">
              <div className="col-lg-3 custom-col">
                <div className="card DCard ">
                  <div className="card-body card-shadow ">
                    <p>Total Projects</p>
                    <h2>{totalCount}</h2>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 custom-col">
                <div className="card DCard">
                  <div className="card card-shadow">
                    <div className="card-body ">
                      <p>Closed</p>
                      <h2>{closeProjectsCount}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 custom-col">
                <div className="card DCard">
                  <div className="card card-shadow">
                    <div className="card-body ">
                      <p>Running</p>
                      <h2>{runningProjectsCount}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 custom-col">
                <div className="card DCard">
                  <div className="card card-shadow">
                    <div className="card-body ">
                      <p>Clouser Delay</p>
                      <h2>8</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 custom-col">
                <div className="card DCard">
                  <div className="card card-shadow">
                    <div className="card-body ">
                      <p>Cancelled</p>
                      <h2>{cancelledProjectsCount}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card">
                <div className="card-body">
                <ProjectBarGraph projects={projects} />


                </div>

            </div> */}
        </div>
      </div>
    </>
  );
}

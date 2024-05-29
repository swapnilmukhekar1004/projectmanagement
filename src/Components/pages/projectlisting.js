import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Sheet from "react-modal-sheet";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import axios from "axios";

export default function Projectlisting() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [sortBy, setSortBy] = useState("priority"); // State for sorting
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/project");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredData = data.filter((item) =>
    item.projectname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort projects based on the selected option
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "priority") {
      return a.priority - b.priority;
    }
    // Add more sorting options if needed
  });

  const indexOfLastRecord = currentPage * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;
  const currentRecords = sortedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/project/${id}`, {
        status: newStatus,
      });
      // Assuming the server updates successfully, we'll also update the local state
      setData(
        data.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <MdOutlineNavigateBefore
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mt-2 me-2 pe-auto"
              style={{ cursor: "pointer" }}
            />
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <MdOutlineNavigateNext
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
              className="mt-2 ms-2 "
              style={{ cursor: "pointer" }}
            />
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div>
        <div>
          {/* device section  */}
          <div className="MainContent TableSection">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="card ">
                  <div className="card-body card-shadow ">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <input
                          type="text"
                          className="form-control SearchTable"
                          placeholder="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        ></input>

                        <div>
                          <label htmlFor="sort" className="text-secondary">
                            Sort By:
                          </label>
                          <select
                            id="sort"
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="border-0"
                          >
                            <option value="priority">Priority</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        {/* Dropdown for sorting */}

                        <table className="table custom-table mt-3">
                          <thead>
                            <tr>
                              <th scope="col">Project Name</th>
                              <th scope="col">Reason</th>
                              <th scope="col">Type</th>
                              <th scope="col">Divison</th>
                              <th scope="col">Category</th>
                              <th scope="col">Priority</th>
                              <th scope="col">Dept.</th>
                              <th scope="col">Location</th>
                              <th scope="col">Status</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentRecords.map((item) => (
                              <tr key={item.id}>
                                <td className=" ProjectNameTitle">
                                  <p>{item.projectname}</p>
                                  <span>{item.startDate}</span>{" "}
                                  <span className="text-lowercase">to</span>{" "}
                                  <span>{item.endDate}</span>
                                </td>
                                <td>{item.reason}</td>
                                <td>{item.type}</td>
                                <td>{item.divison}</td>
                                <td>{item.category}</td>
                                <td>{item.priority}</td>
                                <td>{item.department}</td>
                                <td>{item.location}</td>
                                <td className="fw-bold">{item.status}</td>
                                <td>
                                  <button
                                    onClick={() =>
                                      updateStatus(item.id, "running")
                                    }
                                    className="btn btn-outline-primary m-1"
                                  >
                                    Start
                                  </button>
                                  <button
                                    onClick={() =>
                                      updateStatus(item.id, "closed")
                                    }
                                    className="btn btn-outline-primary m-1"
                                  >
                                    Close
                                  </button>
                                  <button
                                    onClick={() =>
                                      updateStatus(item.id, "cancelled")
                                    }
                                    className="btn btn-outline-primary m-1"
                                  >
                                    Cancel
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <div className="d-flex justify-content-center">
                          <Pagination
                            itemsPerPage={perPage}
                            totalItems={sortedData.length}
                            paginate={paginate}
                            currentPage={currentPage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile section */}
          <div className="MblCardSection">
            <div className="">
              <div className="filterSection">
                <input
                  type="text"
                  className="form-control SearchTable"
                  placeholder="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>

                <HiMiniBars3BottomLeft
                  className="BarIcon"
                  onClick={() => setOpen(true)}
                  style={{ fontSize: "25px" }}
                />
              </div>
            </div>

            <div className="row">
              {currentRecords.map((item) => (
                <div className="col-lg-6 col-md-6">
                  <div className="card mb-3 text-capitalize" key={item.id}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {" "}
                          <p className="NameText" style={{ fontSize: "18px" }}>
                            {item.projectname}
                          </p>{" "}
                        </div>
                        <p className="NameText">{item.status}</p>
                      </div>
                      <span className="DateMbl">
                        <span>{item.startDate}</span>{" "}
                        <span className="text-lowercase">to</span>{" "}
                        <span>{item.endDate}</span>
                      </span>

                      <div className="mt-3 InformSection">
                        <p>
                          <span className="GreyText">
                            Reason:
                            <span className="DarkText">{item.reason}</span>
                          </span>
                        </p>
                        <p className="d-flex">
                          <span className="GreyText">
                            Type:<span className="DarkText">{item.type}</span>{" "}
                          </span>
                          <span>
                            <li className="GreyText ms-3">
                              Category:
                              <span className="DarkText">{item.category}</span>
                            </li>
                          </span>
                        </p>
                        <p className="d-flex">
                          <span className="GreyText">
                            Div:
                            <span className="DarkText">{item.divison}</span>{" "}
                          </span>
                          <span>
                            <li className="GreyText ms-3">
                              Dept:
                              <span className="DarkText">
                                {item.department}
                              </span>
                            </li>
                          </span>
                        </p>
                        <p>
                          <span className="GreyText">
                            Location:
                            <span className="DarkText">{item.location}</span>{" "}
                          </span>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          className="btn btn-outline-primary m-1 BtnCsm"
                          onClick={() => updateStatus(item.id, "running")}
                        >
                          Start
                        </button>
                        <button
                          className="btn btn-outline-primary m-1  BtnCsm"
                          onClick={() => updateStatus(item.id, "closed")}
                        >
                          Close
                        </button>
                        <button
                          className="btn btn-outline-primary m-1  BtnCsm"
                          onClick={() => updateStatus(item.id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
              <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                  <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>Sort Project By</h5>
                      <div>
                        {" "}
                        <IoClose
                          onClick={() => setOpen(false)}
                          style={{ fontSize: "25px" }}
                        />
                      </div>
                    </div>

                    <div>
                      <ul className="SortSection">
                        <li>Priority</li>
                        <li>Recently Modified</li>
                        <li>Status</li>
                        <li>Start Date</li>
                        <li>End Date</li>
                      </ul>
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>
              <Sheet.Backdrop />
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
// import axios from "axios";

// export default function Projectlisting() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage] = useState(10);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/project");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const filteredData = data.filter((item) =>
//     item.projectname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastRecord = currentPage * perPage;
//   const indexOfFirstRecord = indexOfLastRecord - perPage;
//   const currentRecords = filteredData.slice(
//     indexOfFirstRecord,
//     indexOfLastRecord
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const updateStatus = async (id, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:3000/project/${id}`, {
//         status: newStatus,
//       });
//       // Assuming the server updates successfully, we'll also update the local state
//       setData(
//         data.map((item) =>
//           item.id === id ? { ...item, status: newStatus } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <nav>
//         <ul className="pagination">
//           <li className="page-item">
//             {/* <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button> */}

//             <MdOutlineNavigateBefore
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}  className="mt-2 me-2 pe-auto"
//               style={{ cursor: 'pointer' }}
//             />
//           </li>
//           {pageNumbers.map((number) => (
//             <li
//               key={number}
//               className={`page-item ${currentPage === number ? "active" : ""}`}
//             >
//               <button onClick={() => paginate(number)} className="page-link">
//                 {number}
//               </button>
//             </li>
//           ))}
//           <li className="page-item">
//             {/* <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
//             >
//               Next
//             </button> */}

//             <MdOutlineNavigateNext
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
//               className="mt-2 ms-2 "
//               style={{ cursor: 'pointer' }}
//             />
//           </li>
//         </ul>
//       </nav>
//     );
//   };

//   return (
//     <>
//       <div className="CommonPageLayout">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-6">
//               <div
//                 className="d-flex justify-content-between align-items-center"
//                 style={{ marginTop: "6%" }}
//               >
//                 <h5 className="text-white"> <MdOutlineNavigateBefore /> Project Listing</h5>
//                 <img src="img/Logo.svg" alt="logo"></img>
//               </div>
//             </div>
//           </div>

//           <div className="MainContent">
//             <div className="row">
//               <div className="col-lg-12 ">
//                 <div className="card ">
//                   <div className="card-body card-shadow ">
//                     <div>
//                       <div>
//                         <input
//                           type="text"
//                           className="form-control SearchTable"
//                           placeholder="search"
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                         ></input>
//                       </div>

//                       <div>
//                         <table class="table custom-table mt-3">
//                           <thead>
//                             <tr>
//                               <th scope="col">Project Name</th>
//                               <th scope="col">Reason</th>
//                               <th scope="col">Type</th>
//                               <th scope="col">Divison</th>
//                               <th scope="col">Category</th>
//                               <th scope="col">Priority</th>
//                               <th scope="col">Dept.</th>
//                               <th scope="col">Location</th>
//                               <th scope="col">Status</th>
//                               <th scope="col"></th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {currentRecords.map((item) => (
//                               <tr>
//                                 <td className=" ProjectNameTitle"><p>{item.projectname}</p>

//                                 <span>Jun-21,2020</span> <span>to</span> <span>Jan-01,2021</span>


//                                 </td>

//                                 <td>{item.reason}</td>

//                                 <td>{item.type}</td>

//                                 <td>{item.divison}</td>

//                                 <td>{item.category}</td>

//                                 <td>{item.priority}</td>

//                                 <td>{item.department}</td>

//                                 <td>{item.location}</td>

//                                 <td className="fw-bold">{item.status}</td>

//                                 <td>
//                                   <button
//                                     onClick={() =>
//                                       updateStatus(item.id, "running")
//                                     }

//                                     className="btn  btn-outline-primary m-1"
//                                   >
//                                     Start
//                                   </button>

//                                   <button
//                                     onClick={() =>
//                                       updateStatus(item.id, "closed")
//                                     }
//                                     className="btn   btn-outline-primary  m-1"
//                                   >
//                                     Close
//                                   </button>

//                                   <button
//                                     onClick={() =>
//                                       updateStatus(item.id, "cancelled")
//                                     }
//                                     className="btn  btn-outline-primary  m-1"
//                                   >
//                                     Cancel
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>

//                         <div className="d-flex justify-content-center">
//                           <Pagination
//                             itemsPerPage={perPage}
//                             totalItems={filteredData.length}
//                             paginate={paginate}
//                             currentPage={currentPage}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import axios from "axios";

export default function Projectlisting() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [sortBy, setSortBy] = useState("priority"); // State for sorting

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
              className={`page-item ${
                currentPage === number ? "active" : ""
              }`}
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
          <div className="MainContent">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="card ">
                  <div className="card-body card-shadow ">
                    <div>
                      <div>
                        <input
                          type="text"
                          className="form-control SearchTable"
                          placeholder="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        ></input>
                      </div>

                      <div>
                        {/* Dropdown for sorting */}
                        <div>
                          <label htmlFor="sort">Sort By:</label>
                          <select
                            id="sort"
                            onChange={(e) => handleSortChange(e.target.value)}
                          >
                            <option value="priority">Priority</option>
                          </select>
                        </div>

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
                                  <span>Jun-21,2020</span>{" "}
                                  <span>to</span>{" "}
                                  <span>Jan-01,2021</span>
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
        </div>
      </div>
    </>
  );
}

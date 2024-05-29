import React, { useState,useEffect } from "react";
import axios from "axios";

export default function CreateProject() {

  const[newerror , setNewerror] = useState(true);


  const [formData, setFormData] = useState({
    projectTheme: "",
    reason: "",
    type: " ",
    divison: "",
    category: "",
    priority: "",
    department: "",
    startDate: " ",
    endDate: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "  http://localhost:3000/projectlist",
          formData
        );
        setFormData({
          projectTheme: "",
          reason: "",
          type: " ",
          divison: "",
          category: "",
          priority: "",
          department: "",
          startDate: "",
          endDate: "",
          location: "",
        });
        console.log("Data saved:", response.data);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.projectTheme.trim()) {
      formErrors.projectTheme = "Project Theme is required";
      isValid = false;
    }

    if (!formData.reason.trim()) {
      formErrors.reason = "Reason is required";
      isValid = false;
    }

    if (!formData.type.trim()) {
      formErrors.type = "Type is required";
      isValid = false;
    }

    if (!formData.divison.trim()) {
      formErrors.divison = "Divison is required";
      isValid = false;
    }

    if (!formData.category.trim()) {
      formErrors.category = "Category is required";
      isValid = false;
    }

    if (!formData.priority.trim()) {
      formErrors.priority = "Priority is required";
      isValid = false;
    }

    if (!formData.department.trim()) {
      formErrors.department = "Department is required";
      isValid = false;
    }

    if (!formData.startDate.trim()) {
      formErrors.startDate = "Start Date is required";
      isValid = false;
    }

    if (!formData.endDate.trim()) {
      formErrors.endDate = "End Date is required";
      isValid = false;
    }
    if (!formData.location.trim()) {
      formErrors.location = "Location is required";
      isValid = false;
    }


    
    if(formData.startDate < formData.endDate){
      console.log("less");
      setNewerror(true);
   
    }
    else{
      console.log("greater");
      isValid = false;
      setNewerror(false);

    }


    setErrors(formErrors);
    return isValid;
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
                      <div className="row">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="row">
                               
                                  <div className="col-lg-8">
                                    <div class="mb-4">
                                      <textarea
                                        className={
                                          errors.projectTheme
                                            ? "form-control customControl error"
                                            : "form-control customControl"
                                        }
                                        placeholder="Enter Project Theme"
                                        rows="6"
                                        type="text"
                                        name="projectTheme"
                                        value={formData.projectTheme}
                                        onChange={handleChange}
                                      ></textarea>
                                      {errors.projectTheme && (
                                        <div
                                          style={{ color: "red" }}
                                          className="errorLine"
                                        >
                                          {errors.projectTheme}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-lg-4"></div>
                              

                              
                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Reason</label>
                                    <select
                                      className={
                                        errors.reason
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="reason"
                                      value={formData.reason}
                                      onChange={handleChange}
                                    >
                                      <option selected>select reason</option>
                                      <option value="Business">Business</option>
                                      <option value="Transport">
                                        Transport
                                      </option>
                                      <option value="Dealership">
                                        Dealership
                                      </option>
                                    </select>
                                    {errors.reason && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.reason}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Type</label>
                                    <select
                                      className={
                                        errors.type
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="type"
                                      value={formData.type}
                                      onChange={handleChange}
                                    >
                                      <option selected>select type</option>
                                      <option value="Internal">Internal</option>
                                      <option value="External">External</option>
                                      <option value="Vendor">Vendor</option>
                                    </select>
                                    {errors.type && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.type}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Divison</label>
                                    <select
                                      className={
                                        errors.divison
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="divison"
                                      value={formData.divison}
                                      onChange={handleChange}
                                    >
                                      <option selected>select division</option>
                                      <option value="Compressor">
                                        Compressor
                                      </option>
                                      <option value="Filters">Filters</option>
                                      <option value="Pumps">Pumps</option>
                                      <option value="Pumps">Glass</option>
                                    </select>
                                    {errors.divison && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.divison}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Category</label>
                                    <select
                                      className={
                                        errors.category
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="category"
                                      value={formData.category}
                                      onChange={handleChange}
                                    >
                                      <option selected>select category</option>
                                      <option value="Quality A">
                                        Quality A
                                      </option>
                                      <option value="Quality B">
                                        Quality B
                                      </option>
                                      <option value="Quality C">
                                        Quality C
                                      </option>
                                    </select>
                                    {errors.category && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.category}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Priority</label>
                                    <select
                                      className={
                                        errors.priority
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="priority"
                                      value={formData.priority}
                                      onChange={handleChange}
                                    >
                                      <option selected>select priority</option>
                                      <option value="High">High</option>
                                      <option value="Medium">Medium</option>
                                      <option value="Low">Low</option>
                                    </select>
                                    {errors.priority && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.priority}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Department</label>
                                    <select
                                      className={
                                        errors.priority
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="department"
                                      value={formData.department}
                                      onChange={handleChange}
                                    >
                                      <option selected>
                                        select department
                                      </option>
                                      <option value="Stores">Stores</option>
                                      <option value="Finance">Finance</option>
                                      <option value="Maintenance">
                                        Maintenance
                                      </option>
                                    </select>
                                    {errors.department && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.department}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">
                                      Start Date as per Project Plan
                                    </label>
                                    <input
                                      type="Date"
                                      className={
                                        errors.priority
                                          ? "form-control error"
                                          : "form-control"
                                      }
                                      name="startDate"
                                      value={formData.startDate}
                                      onChange={handleChange}
                                    ></input>

                                    {errors.startDate && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.startDate}
                                      </div>
                                    )}

                                  {
                                     newerror
                                     ? ""
                                     :  <div
                                     style={{ color: "red" }}
                                     className="errorLine"
                                   >
                                     Start Date require Leass than End Date
                                   </div>
                                   }


                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">
                                      End Date as per Project Plan
                                    </label>
                                    <input
                                      type="Date"
                                      className={
                                        errors.endDate
                                          ? "form-control error"
                                          : "form-control"
                                      }
                                      name="endDate"
                                      value={formData.endDate}
                                      onChange={handleChange}
                                    ></input>

                                    {errors.endDate && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.endDate}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div class="mb-4">
                                    <label class="form-label">Location</label>
                                    <select
                                      className={
                                        errors.location
                                          ? "form-select error"
                                          : "form-select"
                                      }
                                      name="location"
                                      value={formData.location}
                                      onChange={handleChange}
                                    >
                                      <option selected>select location</option>
                                      <option value="pune">pune</option>
                                      <option value="mumbai">mumbai</option>
                                    </select>
                                    {errors.location && (
                                      <div
                                        style={{ color: "red" }}
                                        className="errorLine"
                                      >
                                        {errors.location}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-8"></div>

                                <div className="col-lg-4">
                                  <label className="form-label">Status:</label>
                                  <strong className="fw-bold">
                                    Registered
                                  </strong>

                                 
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-3">
                               <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-primary w-150 LoginBtn float-end "
                              >
                                Save Project
                              </button>
                            </div>


                            </div>
                          </div>
                        </form>
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

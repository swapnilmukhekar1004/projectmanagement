// import React , { useState }  from "react";

// export default function Login({onLogin}) {

//     const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call the login function passed from the parent component
//     onLogin(email, password);
  
//   };


//   return (
//     <>
//       <section className="LoginSection">
//         <div className="">
//           <div className="DesktopSection">
//             <img src="img/Logo.svg" className="d-block m-auto" alt="logo"></img>
//             <p className="text-white text-center mt-3">
//               Online Project Management
//             </p>
//           </div>

//           <div className="LaptopSection ">
//             <div className="d-flex justify-content-center align-items-center w-100 h-100">
//               <div>
//                 <img
//                   src="img/Logo.svg"
//                   className="d-block m-auto"
//                   alt="logo"
//                 ></img>
//                 <p className="text-white text-center mt-3">
//                   Online Project Management
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="card LoginCustonCard">
//             <div className="card-body">
//               <div>
//                 <p className="LoginTitle text-center mb-5">
//                   Login to get started
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div class="mb-4">
//                     <label class="form-label">Email</label>
//                     <input
//                     type="email"
//                     className="form-control"
//                      id="username"
//                      value={email}
//                      onChange={(e) => setUsername(e.target.value)}
//                      required
//                     />
//                   </div>

//                   <div class="mb-4">
//                     <label class="form-label">Password</label>
//                     <input
//                      className="form-control"
//                        type="password"
//                        id="password"
//                        value={password}
//                        onChange={(e) => setPassword(e.target.value)}
//                        required
//                     />
//                   </div>
//                   <div className="d-flex justify-content-end">
//                     <a href="" className="ForgotText">
//                       Forgot password?
//                     </a>
//                   </div>

//                   <div className="mt-4 d-flex justify-content-center">
//                     <button className="btn btn-primary w-200 LoginBtn ">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the login function passed from the parent component
    onLogin(email, password);
  };

  return (
    <>
      <section className="LoginSection">
        <div className="">
          <div className="DesktopSection">
            <img src="img/Logo.svg" className="d-block m-auto" alt="logo"></img>
            <p className="text-white text-center mt-3">
              Online Project Management
            </p>
          </div>

          <div className="LaptopSection ">
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <div>
                <img
                  src="img/Logo.svg"
                  className="d-block m-auto"
                  alt="logo"
                ></img>
                <p className="text-white text-center mt-3">
                  Online Project Management
                </p>
              </div>
            </div>
          </div>

          <div className="card LoginCustonCard">
            <div className="card-body">
              <div>
                <p className="LoginTitle text-center mb-5">
                  Login to get started
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="" className="ForgotText">
                      Forgot password?
                    </a>
                  </div>

                  <div className="mt-4 d-flex justify-content-center">
                    <button className="btn btn-primary w-200 LoginBtn ">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;


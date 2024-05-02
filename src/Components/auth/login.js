// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Reset error messages
//         setEmailError('');
//         setPasswordError('');

//         // Validate email
//         if (!email.trim()) {
//             setEmailError("Email is required");
//             return;
//         }

//         // Validate password
//         if (!password.trim()) {
//             setPasswordError("Password is required");
//             return;
//         }

//         // Static user credentials
//         const validEmail = "login@gmail.com";
//         const validPassword = "pass";

//         // Check if email and password match the static credentials
//         if (email === validEmail && password === validPassword) {
//             // Redirect to another page upon successful login
//             navigate('/');
//         } else {
//             // Show error message for invalid credentials
//             setEmailError("Invalid email");
//             setPasswordError("Invalid password");
//         }
//     };

//     return (
//         <>
//             <section className="LoginSection">
//                 <div className="">
//                     <div className="DesktopSection">
//                         <img src="img/Logo.svg" className="d-block m-auto" alt="logo"></img>
//                         <p className="text-white text-center mt-3">
//                             Online Project Management
//                         </p>
//                     </div>

//                     <div className="MobileSection ">
//                         <div className="d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
//                             <div>
//                                 <img
//                                     src="img/Logo.svg"
//                                     className="d-block m-auto"
//                                     alt="logo"
//                                 ></img>
//                                 <p className="text-white text-center mt-3">
//                                     Online Project Management
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="card LoginCustonCard">
//                         <div className="card-body">
//                             <div>
//                                 <p className="LoginTitle text-center mb-5">
//                                     Login to get started
//                                 </p>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="mb-4">
//                                         <label className="form-label">Email</label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             className={`form-control ${emailError && "border border-danger"}`}
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             required
//                                         />
//                                         {emailError && <div className="text-danger">{emailError}</div>}
//                                     </div>

//                                     <div className="mb-4">
//                                         <label className="form-label">Password</label>
//                                         <input
//                                             className={`form-control ${passwordError && "border border-danger"}`}
//                                             name="password"
//                                             type="password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                         {passwordError && <div className="text-danger">{passwordError}</div>}
//                                     </div>

//                                     <div className="d-flex justify-content-end">
//                                         <a href="" className="ForgotText">
//                                             Forgot password?
//                                         </a>
//                                     </div>

//                                     <div className="mt-4 d-flex justify-content-center">
//                                         <button className="btn btn-primary w-200 LoginBtn" type="submit">
//                                             Login
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error messages
        setEmailError('');
        setPasswordError('');

        // Validate email
        if (!email.trim()) {
            setEmailError("Email is required");
            return;
        }

        // Validate password
        if (!password.trim()) {
            setPasswordError("Password is required");
            return;
        }

        // Static user credentials
        const validEmail = "login@gmail.com";
        const validPassword = "pass";

        // Check if email and password match the static credentials
        if (email === validEmail && password === validPassword) {
            // Redirect to another page upon successful login
            navigate('/');
        } else {
            // Show error message for invalid credentials
            setEmailError("Invalid email");
            setPasswordError("Invalid password");
        }
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

                    <div className="MobileSection ">
                        <div className="d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
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
                                        <label className={emailError? "form-label text-red": "form-label"}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={emailError ? "form-control error": "form-control"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        {emailError && <div className="text-red">{emailError}</div>}
                                    </div>

                                    <div className="mb-4">
                                        <label className={passwordError? "form-label text-red": "form-label"}>Password</label>
                                        <div className="input-group">
                                            <input
                                                 className={passwordError? "form-control error": "form-control"}
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            {/* Toggle password visibility */}
                                            <button
                                                className="btn btn-outline-secondary pass-eys-icon"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{zIndex:777}}
                                            >
                                                {showPassword ? <FaEye/> : <FaEyeSlash  />}
                                            </button>
                                        </div>
                                        {passwordError && <div className="text-red">{passwordError}</div>}
                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <a href="" className="ForgotText">
                                            Forgot password?
                                        </a>
                                    </div>

                                    <div className="mt-4 d-flex justify-content-center">
                                        <button className="btn btn-primary w-200 LoginBtn" type="submit">
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


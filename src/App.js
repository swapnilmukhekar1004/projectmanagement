// // import Login from "./Components/auth/login";
// // import Layout from "./Components/layout";

// // function App() {
// //   return (
// //     <div className="App">
// //       {/* <Login/> */}
// //       <Layout/>

// //     </div>
// //   );
// // }

// // export default App;
// // App.js
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Redirect, Switch,useHistory  } from 'react-router-dom';
// // import axios from 'axios';
// // // import Sidebar from './Sidebar';
// // // import Dashboard from './Dashboard';
// // // import CreateProject from './CreateProject';
// // // import ProjectListing from './ProjectListing';
// // import Sidebar from './Components/common/sidebar';
// // import Dashboard from './Components/pages/dashboard';
// // import CreateProject from './Components/pages/createproject';
// // import Projectlisting from './Components/pages/projectlisting';
// // import Login from './Components/auth/login';

// // const App = () => {
// //   const [loggedIn, setLoggedIn] = useState(false);
// //   // const [error, setError] = useState('');

// //   const history = useHistory();

// //   // Function to handle login
// //   const handleLogin =  (email, password) => {
// //        console.log(email, password);

// //     // try {
// //     //   const response = await axios.post('http://localhost:3000/login', { email, password });
// //     //   if (response.status === 200) {
// //     //     // Login successful
// //     //     setLoggedIn(true);
// //     //   } else {
// //     //     // Invalid credentials
// //     //     alert('Invalid username or password');
// //     //   }
// //     // } catch (error) {
// //     //   console.error('Error logging in:', error);
// //     // }
// //     // Static user object for authentication
// //     const users = [
// //       { email: 'ss@gmail.com', password: 'ss', id: 1 },
// //       // Add more users if needed
// //     ];

// //     const user = users.find(u => u.email === email && u.password === password);

// //     if (user) {
// //       // Redirect to another page upon successful login
// //       //history.push('/home');
// //       setLoggedIn(true);
// //       history.push('/create-project');
// //     } else {
// //       alert('Invalid username or password');
// //     }

// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <Switch>
// //           <Route path="/login">
// //             {loggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
// //           </Route>
// //           <Route path="/">
// //             {!loggedIn ? <Redirect to="/login" /> : (
// //               <>
// //                 <Sidebar />
// //                 <div className="main-content">
// //                   <Switch>
// //                     <Route path="/" exact component={Dashboard} />
// //                     <Route path="/create-project" component={CreateProject} />
// //                     <Route path="/project-listing" component={Projectlisting} />
// //                   </Switch>
// //                 </div>
// //               </>
// //             )}
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './Components/common/sidebar';
// import Dashboard from './Components/pages/dashboard';
// import CreateProject from './Components/pages/createproject';
// import Projectlisting from './Components/pages/projectlisting';
// import Login from './Components/auth/login';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = (email, password, navigate) => {
//     const users = [
//       { email: 'ss@gmail.com', password: 'ss', id: 1 },
//       // Add more users if needed
//     ];

//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       setLoggedIn(true);
//       navigate('/create-project');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route
//             path="/"
//             element={
//               loggedIn ? (
//                 <>
//                   <Sidebar />
//                   <div className="main-content">
//                     <Routes>
//                       <Route path="/" element={<Dashboard />} />
//                       <Route path="/create-project" element={<CreateProject />} />
//                       <Route path="/project-listing" element={<Projectlisting />} />
//                     </Routes>
//                   </div>
//                 </>
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/auth/login";

import Dashboard from "./Components/pages/dashboard";
import CreateProject from "./Components/pages/createproject";
import Projectlisting from "./Components/pages/projectlisting";
import Layout from "./Components/layout";

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = (email, password, navigate) => {
  //   const users = [
  //     { email: 'ss@gmail.com', password: 'ss', id: 1 },
  //     // Add more users if needed
  //   ];

  //   const user = users.find(u => u.email === email && u.password === password);

  //   if (user) {
  //     setLoggedIn(true);
  //     navigate('/create-project');
  //   } else {
  //     alert('Invalid username or password');
  //   }
  // };

  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/login" element={<Login onLogin={handleLogin} />} />
    //       <Route
    //         path="/"
    //         element={
    //           loggedIn ? (
    //             <AuthenticatedRoutes />
    //           ) : (
    //             <Navigate to="/login" />
    //           )
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </Router>

    <AuthenticatedRoutes />
  );
};

const AuthenticatedRoutes = () => {
  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="createProject" element={<CreateProject />} />
              <Route path="projectListing" element={<Projectlisting />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
       
      </Router>
    </>
  );
};

export default App;

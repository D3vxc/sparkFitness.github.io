import React from "react";
import "./App.css";
import MainRouter from "./components/Routers/Router";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:7001/";
axios.defaults.baseURL = "https://minor-project-backend-z7yb.onrender.com";

function App() {
  return (
    <React.Fragment>
      <MainRouter />
    </React.Fragment>
  );
}

export default App;

// import React, { useEffect } from "react";
// import "./App.css";
// import MainRouter from "./components/Routers/Router";
// import axios from "axios";

// const localBaseURL = "http://localhost:7001/";
// const hostedBaseURL = "https://minor-project-backend-z7yb.onrender.com";

// // Function to try setting axios baseURL to local and catch any error
// const tryLocalServer = async () => {
//   axios.defaults.baseURL = localBaseURL;
//   try {
//     // Try to make a generic request that you expect to succeed if the server is up
//     await axios.get('/'); // Assuming there's a simple endpoint at the root
//     // If successful, keep axios baseURL as local
//   } catch (error) {
//     // If any error occurs, assume local server is down and switch baseURL to hosted
//     axios.defaults.baseURL = hostedBaseURL;
//   }
// };

// function App() {
//   useEffect(() => {
//     // Attempt to connect to local server when component mounts
//     tryLocalServer();
//   }, []);

//   return (
//     <React.Fragment>
//       <MainRouter />
//     </React.Fragment>
//   );
// }

// export default App;

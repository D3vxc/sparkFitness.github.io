import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header.jsx";
import { useFetchAllUsers } from "../Hooks/users/GetAllUsers";
function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const {
    data: getAllUsers,
    isLoading: getusersLoading,
    refetch: refetchUsers,
  } = useFetchAllUsers();

  // useEffect(() => {
  //   if (!isVerified) {
  //     navigate("/");
  //   } else {
  //     axios
  //       .get("/user/getusers")
  //       .then((response) => {
  //         setUsers(response.data); // Update state with user data
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data", error);
  //       });
  //   }
  // }, [isVerified, navigate]);

  return (
    <React.Fragment>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <p>This is some sample content for the home page.</p>

      {/* Display user data */}
      <h2>User Data</h2>
      <ul>
        {getAllUsers?.map((user) => (
          <li key={user?._id}>{user?.username}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Home;

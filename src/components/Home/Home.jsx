import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllUsers } from "../Hooks/users/GetAllUsers";
import MainImage from "../../assets/HomePageImages/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";
import { Box } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const {
    data: getAllUsers,
    isLoading: getusersLoading,
    refetch: refetchUsers,
  } = useFetchAllUsers();

  // console.log("getAllUsers", getAllUsers);

  const isVerified = getAllUsers?.isVerified;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isVerified === false) {
          navigate("/");
        } else {
          // Assuming getAllUsers makes the API call internally
          const usersData = await getAllUsers();
          setUsers(usersData); // Update state with user data
          console.log(usersData);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchData();
  }, [isVerified, navigate, getAllUsers]);

  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${MainImage})`,
          backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
          backgroundRepeat: "no-repeat", // Adjust as needed (repeat, no-repeat, repeat-x, repeat-y)
          backgroundPosition: "center",
        }}
      >
        <h1>Welcome to the Home Page</h1>
        <p>This is some sample content for the home page.</p>

        {/* Display user data */}
        <h2>User Data</h2>
        <ul>
          {getAllUsers?.map((user) => (
            <li key={user?._id}>{user?.username}</li>
          ))}
        </ul>
      </Box>
    </React.Fragment>
  );
}

export default Home;

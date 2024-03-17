import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllUsers } from "../Hooks/users/GetAllUsers";
import MainImage from "../../assets/HomePageImages/Banner.svg";
import { Box, Typography } from "@mui/material";

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
          backgroundImage: `url(${MainImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
          position: "relative",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Shadow Text */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#000", // Shadow color
            textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Shadow effect
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Push the shadow text behind the main text
            width: "700px",
          }}
        >
          Keep Your Body Fit & Strong
        </Typography>

        {/* Main Text */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#FFFFFF", // Text color
            width: "700px",
            position: "relative",
            textShadow:
              "-7px 7px 0 rgba(255, 255, 255, 0.5), -7px 7px 0 rgba(2, 2, 5, 0.5)", // Shadow effect with transparent colors
          }}
        >
          Keep Your Body Fit & Strong
        </Typography>

        <h2>User Data</h2>
        <ul>
          {getAllUsers?.map((user) => (
            <li key={user?._id}>{user?.name}</li>
          ))}
        </ul>
      </Box>
    </React.Fragment>
  );
}

export default Home;

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
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "70px",
            fontWeight: 800,
            letterSpacing: "0em",
            textAlign: "center",
            color: "#FFFFFF", // Text color
            width: "600px",
            position: "relative",
            textShadow:
              "-7px 7px 0 rgba(23, 29, 36, 1), -7.1px 7.1px 0 rgba(255, 255, 255, 1)",
            lineHeight: "95px",
          }}
        >
          Keep Your Body Fit & Strong
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            height: "50px",
            mt: "20px",
            gap: "10px",
          }}
        >
          <Box sx={ButtonStyle}>Start Today</Box>
          <Box sx={ButtonStyle}>About Us</Box>
        </Box>
        {/* <h2>User Data</h2>
        <ul>
          {getAllUsers?.map((user) => (
            <li key={user?._id}>{user?.name}</li>
          ))}
        </ul> */}
      </Box>
      <Box
        sx={{
          background: "#FBFFFE",
          height: "90vh",
          width: "90%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamilu: "poppins",
                color: "#524FF5",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              our fitness training
            </Typography>
            <Typography
              sx={{
                fontFamilu: "poppins",
                color: "#000",
                fontSize: "35px",
                fontWeight: 700,
              }}
            >
              Upcoming Classes
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "200px",
              fontWeight: 800,
              color: "#FBFFFE", // Keeps text color black
              backgroundColor: "#FBFFFE", // Sets the background color.
              // Simulates a border effect around each letter with textShadow
              textShadow: `
      -1px -1px 0 #E3E3E3,  
       1px -1px 0 #E3E3E3,
      -1px  1px 0 #E3E3E3,
       1px  1px 0 #E3E3E3`,
            }}
          >
            CLASSES
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#1C2229",
          width: "100%",
          height: "60px",
          display: "flex",
          overflow: "hidden", // Hide the overflowed text
          position: "relative", // For the absolute positioning of the child
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "poppins",
            fontSize: "30px",
            color: "#FBFFFE",
            textTransform: "uppercase",
            fontWeight: 800,
            letterSpacing: "1em",
            whiteSpace: "nowrap", // Ensure text is in one line
            animation: "marquee 20s linear infinite", // Adjust duration as needed
            "@keyframes marquee": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          focus on your{" "}
          <Typography
            sx={{
              // position: "absolute",
              // width: "100%",
              // height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "poppins",
              fontSize: "30px",
              color: "#A1F65E",
              textTransform: "uppercase",
              fontWeight: 800,
              letterSpacing: "1em",
            }}
          >
            ㅤfitnessㅤ
          </Typography>{" "}
          not your loss
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;

const ButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "poppins",
  fontSize: "18px",
  fontWeight: 500,
  width: "180px",
  height: "50px",
  border: "2px solid #FBFFFE",
  background: "transparent",
  color: "#FBFFFE",
  "&:hover": {
    border: "2px solid transparent",
    background: "#A1F65E",
    color: "#1B1B1E",
    cursor: "pointer",
  },
};

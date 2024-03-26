// import * as React from "react";
// import { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./YourStyleSheet.css"; // Replace with the actual path to your CSS file

// function Register() {
//   const navigate = useNavigate();
//   const [isVerified, setIsVerified] = useState(false);
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//     defaultValues: {
//       email: "",
//       phone: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       const requestData = { ...data, isVerified };
//       const response = await axios.post("/user/register", requestData);

//       if (response.status === 201 || response.status === 200) {
//         // Show a success toast message
//         toast.success("User registered successfully", {
//           position: "bottom-right",
//           autoClose: 1500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });

//         // Redirect to login page or any other desired page
//         navigate("/");
//       } else {
//         // Show an error toast message for registration failure
//         toast.error("Registration failed", {
//           position: "bottom-right",
//           autoClose: 1500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } catch (error) {
//       console.error("Registration failed", error);

//       // Show an error toast message for registration failure
//       toast.error("Registration failed", {
//         position: "bottom-right",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };

//   const handleCheckboxChange = (event) => {
//     setIsVerified(event.target.checked);
//   };

//   return (
//     <ThemeProvider theme={createTheme()}>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//           background: "#212121", // Dark background color
//         }}
//       >
//         <Container component='main' maxWidth='xs'>
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//             className='form-container' // Add the class for styling
//           >
//             <Box
//               component='form'
//               noValidate
//               onSubmit={handleSubmit(onSubmit)}
//               sx={{ mt: 3 }}
//               className='form' // Add the class for styling
//             >
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   {/* Wrap TextField with Controller for Email */}
//                   <Controller
//                     name='email'
//                     control={control}
//                     defaultValue=''
//                     rules={{
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Invalid email address",
//                       },
//                     }}
//                     render={({ field }) => (
//                       <TextField
//                         {...field}
//                         required
//                         fullWidth
//                         id='email'
//                         label='Email Address'
//                         name='email'
//                         autoComplete='email'
//                         className='form-group' // Add the class for styling
//                       />
//                     )}
//                   />
//                   {errors.email && (
//                     <Typography variant='caption' color='error'>
//                       {errors.email.message}
//                     </Typography>
//                   )}
//                 </Grid>
//                 <Grid item xs={12}>
//                   {/* Wrap TextField with Controller for Phone Number */}
//                   <Controller
//                     name='phone'
//                     control={control}
//                     defaultValue=''
//                     rules={{
//                       required: "Phone number is required",
//                       pattern: {
//                         value: /^[0-9]{10}$/i,
//                         message: "Invalid phone number",
//                       },
//                     }}
//                     render={({ field }) => (
//                       <TextField
//                         {...field}
//                         required
//                         fullWidth
//                         id='phone'
//                         label='Phone Number'
//                         name='phone'
//                         autoComplete='tel'
//                         className='form-group' // Add the class for styling
//                       />
//                     )}
//                   />
//                   {errors.phone && (
//                     <Typography variant='caption' color='error'>
//                       {errors.phone.message}
//                     </Typography>
//                   )}
//                 </Grid>
//                 <Grid item xs={12}>
//                   {/* Wrap TextField with Controller for Password */}
//                   <Controller
//                     name='password'
//                     control={control}
//                     defaultValue=''
//                     rules={{
//                       required: "Password is required",
//                       minLength: {
//                         value: 8,
//                         message: "Password must be at least 8 characters",
//                       },
//                     }}
//                     render={({ field }) => (
//                       <TextField
//                         {...field}
//                         required
//                         fullWidth
//                         name='password'
//                         label='Password'
//                         type='password'
//                         id='password'
//                         autoComplete='new-password'
//                         className='form-group' // Add the class for styling
//                       />
//                     )}
//                   />
//                   {errors.password && (
//                     <Typography variant='caption' color='error'>
//                       {errors.password.message}
//                     </Typography>
//                   )}
//                 </Grid>
//               </Grid>
//               <Button
//                 type='submit'
//                 fullWidth
//                 variant='contained'
//                 sx={{ mt: 3, mb: 2 }}
//                 className='form-submit-btn' // Add the class for styling
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent='flex-end'>
//                 <Grid item>
//                   <Typography
//                     variant='body2'
//                     onClick={() => {
//                       navigate("/login");
//                     }}
//                   >
//                     Already have an account? Sign in
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//       <ToastContainer />
//     </ThemeProvider>
//   );
// }

// export default Register;
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/HomePageImages/Logo.svg";

export default function SignUp() {
  const navigate = useNavigate();

  // State variables for input validation
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Reset errors
    setFirstNameError(!data.get("firstName"));
    setLastNameError(!data.get("lastName"));
    setEmailError(!data.get("email"));
    setPasswordError(!data.get("password"));

    // If validation passes (for demonstration purposes)
    if (
      data.get("firstName") &&
      data.get("lastName") &&
      data.get("email") &&
      data.get("password")
    ) {
      console.log({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
      });
      // Navigate or handle the sign-up process here
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component='img'
              src={logo}
              sx={{ height: "50px", width: "50px" }}
            />
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "0em",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              Spark Fitness
            </Typography>
          </Box>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  error={firstNameError}
                  helperText={firstNameError ? "First name is required" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  error={lastNameError}
                  helperText={lastNameError ? "Last name is required" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  error={emailError}
                  helperText={emailError ? "Email is required" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  error={passwordError}
                  helperText={passwordError ? "Password is required" : ""}
                />
              </Grid>
              {/* Example of a grid item for additional inputs or information */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link
                  href='#'
                  variant='body2'
                  onClick={() => navigate("/login")}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

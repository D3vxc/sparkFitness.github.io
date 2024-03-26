// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import "./YourStyleSheet.css"; // Replace with the actual path to your CSS file
// import { Box, Typography, Grid } from "@mui/material";
// import Cookies from "js-cookie";

// function Login() {
//   const navigate = useNavigate();
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const [isLoading, setIsLoading] = React.useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setIsLoading(true);

//       // Make an HTTP POST request to the login API endpoint with user data
//       const response = await axios.post("/user/login", data);
//       console.log("response", response);
//       Cookies.set("token", response.data.token);

//       // Check the response status code to determine success or failure
//       if (response.status === 200) {
//         // Show a success toast message
//         toast("🦄 Login successful!", {
//           position: "top-center",
//           autoClose: 1500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         console.log("User logged in successfully");
//         navigate("/");
//       } else {
//         // Show an error toast message for invalid credentials
//         toast("🦄 Invalid credentials!", {
//           position: "top-center",
//           autoClose: 1500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         console.error("Login failed: Invalid credentials");
//       }
//       setIsLoading(false);
//     } catch (error) {
//       // Show an error toast message for other errors
//       toast("Login failed!", {
//         position: "top-center",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       console.error("Invalid email Or password", error.response.data);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       <ToastContainer />
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//           background: "#212121",
//         }}
//       >
//         <div className='form-container'>
//           <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
//             <div className='form-group'>
//               <label htmlFor='email'>Email</label>
//               <Controller
//                 name='email'
//                 control={control}
//                 defaultValue=''
//                 rules={{
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <input {...field} required type='text' id='email' />
//                 )}
//               />
//               {errors.email && (
//                 <p className='error-message'>{errors.email.message}</p>
//               )}
//             </div>
//             <div className='form-group'>
//               <label htmlFor='password'>Password</label>
//               <Controller
//                 name='password'
//                 control={control}
//                 defaultValue=''
//                 rules={{
//                   required: "Password is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password must be at least 8 characters",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <input {...field} required type='password' id='password' />
//                 )}
//               />
//               {errors.password && (
//                 <p className='error-message'>{errors.password.message}</p>
//               )}
//             </div>
//             <button
//               type='submit'
//               className='form-submit-btn'
//               disabled={isLoading}
//             >
//               {isLoading ? "Logging in..." : "Sign In"}
//             </button>
//           </form>
//           <Grid container justifyContent='flex-end'>
//             <Grid item>
//               <Typography
//                 variant='body2'
//                 onClick={() => {
//                   navigate("/register");
//                 }}
//               >
//                 Already have an account? Sign in
//               </Typography>
//             </Grid>
//           </Grid>
//         </div>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default Login;

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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  variant="body2"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

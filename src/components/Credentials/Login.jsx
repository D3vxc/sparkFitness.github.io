import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./YourStyleSheet.css"; // Replace with the actual path to your CSS file
import { Box, Typography, Grid } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Make an HTTP POST request to the login API endpoint with user data
      const response = await axios.post("/user/login", data);

      // Check the response status code to determine success or failure
      if (response.status === 200) {
        // Show a success toast message
        toast("🦄 Login successful!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("User logged in successfully");
        navigate("/home");
      } else {
        // Show an error toast message for invalid credentials
        toast("🦄 Invalid credentials!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error("Login failed: Invalid credentials");
      }
      setIsLoading(false);
    } catch (error) {
      // Show an error toast message for other errors
      toast("Login failed!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Invalid email Or password", error.response.data);
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#212121",
        }}
      >
        <div className='form-container'>
          <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input {...field} required type='text' id='email' />
                )}
              />
              {errors.email && (
                <p className='error-message'>{errors.email.message}</p>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <Controller
                name='password'
                control={control}
                defaultValue=''
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                render={({ field }) => (
                  <input {...field} required type='password' id='password' />
                )}
              />
              {errors.password && (
                <p className='error-message'>{errors.password.message}</p>
              )}
            </div>
            <button
              type='submit'
              className='form-submit-btn'
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Sign In"}
            </button>
          </form>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Typography
                variant='body2'
                onClick={() => {
                  navigate("/register");
                }}
              >
                Already have an account? Sign in
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default Login;

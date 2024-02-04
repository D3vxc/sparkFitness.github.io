import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* Wrap TextField with Controller */}
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
                <TextField
                  {...field}
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
              )}
            />
            {errors.email && (
              <Typography variant='caption' color='error'>
                {errors.email.message}
              </Typography>
            )}
            {/* Wrap TextField with Controller for Password */}
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
                <TextField
                  {...field}
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
              )}
            />

            {errors.password && (
              <Typography variant='caption' color='error'>
                {errors.password.message}
              </Typography>
            )}
            {/* <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            /> */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  variant='body2'
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;

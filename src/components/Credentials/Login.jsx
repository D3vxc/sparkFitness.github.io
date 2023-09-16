import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Make an HTTP POST request to the login API endpoint with user data
      const response = await axios.post('/user/login', data);

      // Check the response status code to determine success or failure
      if (response.status === 200) {
        // Show a success toast message
        toast('🦄 Wow so easy!', {
          position: 'bottom-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.log('User logged in successfully');
      } else {
        // Show an error toast message for invalid credentials
        toast('🦄 Wow so easy!', {
          position: 'bottom-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.error('Login failed: Invalid credentials');
      }
      setIsLoading(false);
    } catch (error) {
      // Show an error toast message for other errors
      toast('Login failed!', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.error('Login failed', error.response.data);
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Box
        sx={{
          width: '500px',
        }}
      >
        <Typography variant="h4">Login here</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box my={2}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            {errors.email && (
              <Typography variant="caption" color="error">
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box my={2}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            {errors.password && (
              <Typography variant="caption" color="error">
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Box my={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Box>

          <Box
            onClick={() => {
              navigate('/register');
            }}
          >
            <Typography
              sx={{
                cursor: 'pointer',
                fontSize: '12px',
                color: '#3f51b5',
              }}
            >
              Don't have an account? click here to register
            </Typography>
          </Box>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default Login;

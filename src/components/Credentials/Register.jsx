import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      phone: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('/user/register', data);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          width: '500px',
        }}
      >
        <Typography variant="h4">Register here</Typography>
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
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: 'Invalid phone number',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            {errors.phone && (
              <Typography variant="caption" color="error">
                {errors.phone.message}
              </Typography>
            )}
          </Box>
          <Box my={2}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 6,
                  message: 'Username must be at least 6 characters',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            {errors.username && (
              <Typography variant="caption" color="error">
                {errors.username.message}
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
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default Register;

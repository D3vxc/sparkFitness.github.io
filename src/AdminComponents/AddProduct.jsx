import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "", // This will store the base64 encoded image
  });

  const [error, setError] = useState({
    name: false,
    price: false,
    stock: false,
    description: false,
    image: false, // Handling image errors through helperText might need a different approach
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Resetting error state if the field is not empty
    if (value.trim() !== "") {
      setError((prevState) => ({ ...prevState, [name]: false }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setError((prevState) => ({ ...prevState, image: false }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newError = {
      name: !formData.name.trim(),
      price: !formData.price.trim(),
      stock: !formData.stock.trim(),
      description: !formData.description.trim(),
      image: !formData.image.trim(),
    };
    setError(newError);
    // Form is valid if no values in newError are true
    return Object.values(newError).every((v) => !v);
  };

  const addProduct = () => {
    if (validateForm()) {
      console.log(formData); // For demonstration purposes
      // Here you would usually send the data to the backend
      setFormData({
        name: "",
        price: "",
        stock: "",
        description: "",
        image: "",
      }); // Reset form
    }
  };

  return (
    <Container
      sx={{ mt: 4, backgroundColor: "#A1F65E", p: 3, borderRadius: 2 }}
    >
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", color: "primary.main" }}
      >
        Add a New Product
      </Typography>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "300px" },
          "& .MuiButton-root": { width: "150px" },
          backgroundColor: "white",
          p: 3,
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          label='Product Name'
          variant='outlined'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          error={error.name}
          helperText={error.name ? "Product name is required." : ""}
        />
        <TextField
          label='Price'
          variant='outlined'
          name='price'
          type='number'
          value={formData.price}
          onChange={handleChange}
          required
          error={error.price}
          helperText={error.price ? "Price is required." : ""}
        />
        <TextField
          label='Stock'
          variant='outlined'
          name='stock'
          type='number'
          value={formData.stock}
          onChange={handleChange}
          required
          error={error.stock}
          helperText={error.stock ? "Stock is required." : ""}
        />
        <TextField
          label='Product Description'
          variant='outlined'
          name='description'
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
          error={error.description}
          helperText={
            error.description ? "Product description is required." : ""
          }
        />
        <Button
          variant='contained'
          component='label'
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Upload Image
          <input
            type='file'
            hidden
            accept='image/*'
            onChange={handleImageChange}
          />
        </Button>
        {/* Image error displayed as helper text instead of an alert */}
        {error.image && (
          <Typography color='error' sx={{ mt: 2, width: "100%" }}>
            Please upload an image.
          </Typography>
        )}
        <Button
          onClick={addProduct}
          variant='contained'
          color='success'
          sx={{ mt: 2 }}
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
}

export default AddProduct;

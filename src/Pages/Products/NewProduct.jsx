import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate("");
  const [NewProduct, SetNewProduct] = useState({
    id: 1,
    title: "",
    price: 0,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const HandleNewProduct = (event) => {
    const { name, value } = event.target;
    const FieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      SetNewProduct({
        ...NewProduct,
        rating: { ...NewProduct.rating, [FieldName]: value },
      });
    }
    else{
      SetNewProduct({
        ...NewProduct,
        [name]: value
      })
    }
  };
  const addNewProduct = () => {
     if(NewProduct){
      navigate("/products")
     }
  };
  return (
    <>
      <Paper elevation={20} className="NewProduct_Paper">
        <Typography variant="h5" component="h5" textAlign={"center"}>
          Create New Product
        </Typography>
        <Grid component={"form"} spacing={2} className="NewProductGrid">
          <TextField
            label="Product Name"
            type="text"
            value={NewProduct.title}
            variant="outlined"
            fullWidth
            name="title"
            onChange={(e) => HandleNewProduct(e)}
          />
          <TextField
            label="Category"
            type="text"
            value ={NewProduct.category}
            variant="outlined"
            fullWidth
            name="category"
            onChange={(e) => HandleNewProduct(e)}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                size="6"
                type="number"
                label="rate"
                variant="outlined"
                fullWidth
                name="rating.rate"
                onChange={(e) => HandleNewProduct(e)}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                size="6"
                label="count"
                type="number"
                variant="outlined"
                name="rating.count"
                onChange={(e) => HandleNewProduct(e)}
              />
            </Grid>
          </Grid>
          <Button onClick={addNewProduct} variant="contained">
            Add
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default NewProduct;

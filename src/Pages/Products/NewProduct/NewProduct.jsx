import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import NewProductFn from "./NewProductFn";
import "./style.scss";

const NewProduct = () => {
  const { HandleNewProduct,
    AddProduct,
    NewProduct,
    open,
  } = NewProductFn()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Paper elevation={20} className="NewProduct_Paper">
        <Typography variant="h5" component="h5" textAlign={"center"}>
          Create New Product
        </Typography>
        <Grid component={"form"} spacing={2} className="NewProductGrid" onSubmit={AddProduct}>
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
            value={NewProduct.category}
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
          <Button type="submit" aria-label="add" role="button" variant="contained">
            Add
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Product Added Succesfully
            </Alert>
          </Snackbar>
        </Grid>
      </Paper>
    </>
  );
};

export default NewProduct;

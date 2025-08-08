import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import UpdataeProductfn from "./UpdateProductfn";
import "./style.scss";


const UpdateProduct = () => {

  const { UpdateProduct,
    UpdateProductFn, HandleUpdateProduct, open, setOpen
  } = UpdataeProductfn()


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Paper elevation={20} className="UpdateProduct_Paper">
        <Typography variant="h5" component="h5" textAlign={"center"}>
          Update Product
        </Typography>
        <Grid component={"form"} spacing={2} className="UpdateProductGrid" onSubmit={UpdateProductFn}>
          <TextField
            label="Product Name"
            type="text"
            value={UpdateProduct.title}
            variant="outlined"
            fullWidth
            name="title"
            onChange={(e) => HandleUpdateProduct(e)}
          />
          <TextField
            label="Category"
            type="text"
            value={UpdateProduct.category}
            variant="outlined"
            fullWidth
            name="category"
            onChange={(e) => HandleUpdateProduct(e)}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                size="6"
                type="number"
                label="rate"
                variant="outlined"
                fullWidth
                value={UpdateProduct.rating.rate}
                name="rating.rate"
                onChange={(e) => HandleUpdateProduct(e)}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                size="6"
                label="count"
                type="number"
                variant="outlined"
                value={UpdateProduct.rating.count}
                name="rating.count"
                onChange={(e) => HandleUpdateProduct(e)}
              />
            </Grid>
          </Grid>
          <Button type="submit" aria-label="Update" color="success" role="button" variant="contained">
            Update
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Product Updated Succesfully
            </Alert>
          </Snackbar>
        </Grid>
      </Paper>
    </>
  );

}

export default UpdateProduct
import {
  Backdrop, CircularProgress, Button as MuiButton, Typography, Paper, Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material";
import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1000)
  const drawerWidth = 240;

  if (loading) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fffff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <main>
      <Paper elevation={24} height={"100vh"} >
        <Grid container spacing={2}  backgroundColor={"#391414ff"}>
          <Grid size={6} marginTop={2} marginBottom={2}>
            <Card sx={{ maxWidth: 600 }} >
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Products
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small" onClick={() => navigate("/products")}>GO</MuiButton>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={6} marginTop={2} marginBottom={2} >
            <Card sx={{ maxWidth: 600 }} >
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small" onClick={() => navigate("/products")}>Go</MuiButton>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </main >
  );
};

export default Home;



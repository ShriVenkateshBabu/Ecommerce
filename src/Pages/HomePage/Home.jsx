import { Backdrop, CircularProgress, Button as MuiButton } from "@mui/material";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import "./style.scss";

const Home = () => {
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
      <Typography variant="h5" component="h5" textAlign={"center"} pt={2}>
        Home Page
      </Typography>
    
    </main >
  );
};

export default Home;



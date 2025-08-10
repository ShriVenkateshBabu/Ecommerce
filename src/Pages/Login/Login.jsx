import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, TextField, Button, Grid } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  function handleLogin(e) {
    
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className="Login_Container">
      <Paper elevation={24} className="Login_Paper" sx={{ p: 4 }}>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ fontFamily: "serif", mb: 3 }}
        >
          Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{ mb: 2, fontFamily: "serif" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 3, fontFamily: "serif" }}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ fontFamily: "serif" }}
              >
                Login
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                variant="contained"
                 onClick={() => navigate("/signup")}
                fullWidth
                sx={{ fontFamily: "serif" }}
              >
                 SignUp
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

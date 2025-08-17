import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Typography, TextField, Button, Grid, FormHelperText, FormControl, InputAdornment, OutlinedInput, InputLabel, IconButton, Snackbar, Alert } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import LoginIcon from '@mui/icons-material/Login';
import Fetch from "../../Fetch/Fetch"
import "./style.scss";
const Login = () => {
  const navigate = useNavigate();

  const { data, err, isLoading } = Fetch("http://localhost:3000/credentials")

  const [open, setOpen] = React.useState(false);

  const [alert, setAlert] = React.useState("");

  const [severity, setseverity] = React.useState("");

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [shouldNavigate, setShouldNavigate] = React.useState(false)
  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (shouldNavigate) {
      navigate("/home")
    }
  };

  const handleLogin = (UserCredentials) => {
    const ValidUser = data.find((user) =>
      user.username === UserCredentials.username && user.password === UserCredentials.password
    )
    if (ValidUser) {
      setOpen(true);
      setAlert("Login Successfull")
      setseverity("success")
      setShouldNavigate(true)

    }
    else {
      setOpen(true);
      setAlert("Invalid Credentials")
      setseverity("error")
      setShouldNavigate(false)
    }
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

        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            autoComplete="off"
            name="username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={{ mb: 2, fontFamily: "serif" }}
          />
          <FormControl fullWidth variant="outlined"
            error={!!errors.password}
          >
            <InputLabel htmlFor="outlined-adornment-password"> Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              {...register("password", { required: "password is required" })}
              placeholder="Enter your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ fontFamily: "serif" }}
              >

                Login <LoginIcon ml={4} ></LoginIcon>
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                variant="contained"
                onClick={() => navigate("/signup")}
                fullWidth
                sx={{ fontFamily: "serif" }}
              >
                SignUp  <AssignmentIndSharpIcon ml={6}></AssignmentIndSharpIcon>
              </Button>
            </Grid>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
              >
                {alert}
              </Alert>
            </Snackbar>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

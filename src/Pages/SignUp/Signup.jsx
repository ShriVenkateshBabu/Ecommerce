import * as React from 'react';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Paper, Typography, TextField, Button, Grid, FormHelperText, FormControl, InputAdornment, OutlinedInput, InputLabel, IconButton, Snackbar, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import './style.scss'
import axios from 'axios';

const Signup = () => {

  const navigate = useNavigate("/login")

  const [open, setOpen] = React.useState(false);

  const [alert, setAlert] = React.useState("");

  const [severity, setseverity] = React.useState("");

  const [shouldNavigate, setShouldNavigate] = React.useState(false)

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const schema =
    Yup.object().shape({
      username: Yup.string().required("Username is required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Invalid name format"),
      email: Yup.string().email().required("Email is required").matches(/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/, "Invalid email format"),
      age: Yup.number().min(18).max(90).required("Age is required").integer().positive(),
      password: Yup.string().required("Password is required"),
      confirmpassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Password does not match")
    })
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  )


  const handleData = async (data) => {
    try {
      const new_user = {
        username: data.username,
        password: data.password
      }

      const POSTAPI = await axios.post("http://localhost:3000/credentials", new_user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (POSTAPI.status == 200 || POSTAPI.status == 201) {
        setAlert("Login Successfull")
        setseverity("success")
        setOpen(true);
        setShouldNavigate(true)
      }
      else {
        throw new Error("Something went wrong");
      }

    }
    catch (err) {

      setAlert(err.message)
      setseverity("error")
      setOpen(true);
      setShouldNavigate(false)
      console.error(err)
    }
  }

  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (shouldNavigate) {
      navigate("/login")
    }
  };
  return (
    <div className='signup_Container'>
      <Paper elevation={24} className='signup_Paper' component={"form"} onSubmit={handleSubmit(handleData)}>
        <Typography variant='h5' textAlign={'center'} >
          Signup
        </Typography>
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          {...register("username", { required: "username is required" })}
          error={!!errors.username}
          helperText={errors.username?.message}
        >
        </TextField>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          {...register("email", { required: "email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        >
        </TextField>
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
        <FormControl fullWidth variant="outlined"
          error={!!errors.confirmpassword}
        >

          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            {...register("confirmpassword", { required: "Confrim password is required" })}

            placeholder="Confirm your password"
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
            label="Confirm Password"
          />
          <FormHelperText>{errors.confirmpassword?.message}</FormHelperText>
        </FormControl>
        <TextField
          label="Age"
          type="number"
          variant="outlined"
          fullWidth
          {...register("age", { required: "age is required" })}
          error={!!errors.age}
          helperText={errors.age?.message}
        ></TextField>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Button fullWidth variant="contained" type='submit' role='button' aira-label='Sign In' tabIndex={0}>Sign In

              <AssignmentIndSharpIcon ml={6}></AssignmentIndSharpIcon>
            </Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="contained" onClick={() => navigate("/login")} role='button' aira-label='Sign In' tabIndex={0}>Login
              <LoginIcon ml={4} ></LoginIcon>
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
      </Paper>
    </div>
  )
}

export default Signup
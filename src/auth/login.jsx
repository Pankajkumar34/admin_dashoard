import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import getAxiosInstance from "../utils/axios.config";
import { useLottie } from "lottie-react";
import { json, useNavigate } from "react-router-dom";
import imgbg from "../assets/img/3409297.jpg";
import { Alert, Modal } from "@mui/material";
import animation from "../lottie/Animation - 1708583156388.json";
import { fetchData } from "../utils/thunkApi";
import { useDispatch } from "react-redux";
export default function SignIn() {
  const dispatch = useDispatch();
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigate();

  // Dispatch fetchData after successful login
  const handleLoginSuccess = (details) => {
    localStorage.setItem("details", JSON.stringify(details));
    dispatch(fetchData());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const postData = await getAxiosInstance().post("login", {
        email: data.get("email"),
        password: data.get("password"),
      });
     
      console.log(postData, "postData");
      if (postData.status === 200) {
        setShowModal(true);
        const details = postData?.data;
        handleLoginSuccess(details);
        setTimeout(() => {
          navigation("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if user is already logged in (e.g., after page refresh)
    const details = JSON.parse(localStorage.getItem("details"));
    if (details?.Token) {
      dispatch(fetchData());
    }else{
      console.log("not token")
    }
  }, []);

  return (
    <div
      className="main_login d-flex align-items-center"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div>{View}</div>

      <Container component="main" maxWidth="sm">
        {showModal === true && (
          <Alert severity="success">This is a success Alert.</Alert>
        )}
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            maxWidth: "500px",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

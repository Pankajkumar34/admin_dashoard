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
import axios from "axios";
import { useLottie } from "lottie-react";
import { json, useNavigate } from "react-router-dom";
import imgbg from "../assets/img/3409297.jpg";
import { Alert, Modal } from "@mui/material";
import animation from "../lottie/Animation - 1708583156388.json";
export default function SignIn() {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const postData = await axios.post("http://localhost:4000/api/login", {
        email: data.get("email"),
        password: data.get("password"),
      });
      console.log(postData.data, "postData");
      if (postData.statusText === "OK") {
        setShowModal(true);
        const details = postData.data;
        localStorage.setItem("details", JSON.stringify(details));

        setTimeout(() => {
          navigation("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
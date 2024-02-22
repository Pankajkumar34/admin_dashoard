import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import imgbg from "../assets/img/3409297.jpg";
import { useLottie } from "lottie-react";
import animation from "../lottie/Animation - 1708583156388.json";
import { Link, useNavigate } from "react-router-dom";
import CircularColor from "../components/loader/progress";
import { Grid } from "@mui/material";
export default function SignUp() {
    const [loader,setLoader]=useState(false)
    const navigate= useNavigate()
    const options = {
        animationData: animation,
        loop: true,
      };
      const { View } = useLottie(options);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const postData = await axios.post(
        "http://localhost:4000/api/create_user",
        {
          email: data.get("email"),
          password: data.get("password"),
          name: data.get("name"),
        }
      );
     if(postData.statusText==="OK"){
        setLoader(true)
        setTimeout(() => {
            navigate('/signin')
          }, 1000);
       
     }
    } catch (error) {
      console.log(error);
    }
 
  };

  return (
    <div className="main_login d-flex align-items-center"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100vh"
       
      }}
    >

<div>{View}</div>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            maxWidth: '500px'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
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
              id="name"
              label="name Address"
              name="name"
              autoComplete="name"
              autoFocus
            />
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
             { loader?<CircularColor/>:"Sign up"}
             
            </Button>
          </Box>
          <Grid container>
            <Grid item xs textAlign={'center'}>
              <Link href="/signin" variant="body2">
                {`Go To Login page`}
              </Link>
            </Grid>
           
          </Grid>
        </Box>
       
      </Container>
    </div>
  );
}

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import getAxiosInstance from "../utils/axios.config";
import imgbg from "../assets/img/3409297.jpg";
import { useLottie } from "lottie-react";
import animation from "../lottie/Animation - 1708583156388.json";
import { Link, useNavigate } from "react-router-dom";
import CircularColor from "../components/loader/progress";
import { Grid } from "@mui/material";

export default function SignUp() {
  const [AuthFields, setAuthFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState();

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
    };

    try {
      if (!(AuthFields.email, AuthFields.name, AuthFields.password)) {
        alert("all fields required");
      } else {
        const postData = await getAxiosInstance().post(
          "create_user",
          {
            email: data.get("email"),
            password: data.get("password"),
            name: data.get("name"),
          }
        );
        
        if (postData.status === 200) {
          setLoader(true);
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const validateEmail = () => {
    return String(AuthFields.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



 

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAuthFields({ ...AuthFields, [name]: value });

    if (AuthFields.email.length > 0 && !validateEmail()) {
      setValidation("example: test@gmail.com ");
    } else if(AuthFields.email===""){
      setValidation(null);
    }else{
      setValidation(null);
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
            maxWidth: "500px",
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
              onChange={handleChange}
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
              onChange={handleChange}
              id="email"
              label="Email Address"
            
              name="email"
              autoComplete="email"
              autoFocus
            />
            {validation && (
              <span className="error_message" style={{ color: "red" }}>
                {validation}
              </span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
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
              {loader ? <CircularColor /> : "Sign up"}
            </Button>
          </Box>
          <Grid container>
            <Grid item xs textAlign={"center"}>
              <Button
                onClick={() => navigate("/signin")}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Go to login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

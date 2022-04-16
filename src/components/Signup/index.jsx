import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
  } from "../../firebase";

function Signup() {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=> {
  if(user) {
      navigate("/questionnaire")}
  },[navigate, user])
  const handleSubmit = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword( email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     //localStorage.setItem('user', user)
//      console.log(user)
//     // ...
//   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };
  const handleEmailChange = (event) => {
      setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}

  return (
    <>
      <div>
        <h1>UCLA Connect</h1>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <TextField error id="email" label="Email Address" variant="outlined" helperText="Must be a UCLA email address"/> */}
        <TextField id="email" label="Email Address" variant="outlined" onChange={handleEmailChange} value = {email} />
        <TextField id="password" label="Password" variant="outlined" type="password" onChange={handlePasswordChange} value = {password} />
        <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
      </Box>
      <Box>
        <h3>Have an account?</h3> <Link href="login">Sign In</Link>
      </Box>
      
    </>
  );
}
export default Signup;

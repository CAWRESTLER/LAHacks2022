import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Button variant="contained">Sign In</Button>
      </Box>
      <Box>
        <h3>Dont have an account?</h3> <Link href="#">Sign Up</Link>
      </Box>
      
    </>
  );
}
export default Login;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset,  } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";



function Reset() {
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  useEffect(()=>{
    if(!loading){
      if(user){
        navigate("/")
      }
    }
  },[loading, navigate, user])
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordReset(email)
  };
  const handleEmailChange = (event) => {
      setEmail(event.target.value);
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
        <h3>Send reset email</h3>
        <TextField id="email" label="Email Address" variant="outlined" onChange={handleEmailChange} value = {email} />
        <Button variant="contained" onClick={handleSubmit}>Reset</Button>
      </Box>
      <Box>
      <Link href="login">
        <h3>Sign In?</h3>
        </Link>
      </Box>
      <Box>
        <h3>Dont have an account?</h3> <Link href="signup">Sign Up</Link>
      </Box>
      
    </>
  );
}
export default Reset;

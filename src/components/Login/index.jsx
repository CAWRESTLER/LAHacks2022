import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword,  } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";



function Login() {
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    if(!loading){
      if(user){
        navigate("/")
      }
    }
  },[loading, navigate, user])
  const handleSubmit = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email,password)
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
        <Button variant="contained" onClick={handleSubmit}>Sign In</Button>
      </Box>
      <Box>
      <Link href="reset">
        <h3>Forgot Password?</h3>
        </Link>
      </Box>
      <Box>
        <h3>Dont have an account?</h3> <Link href="signup">Sign Up</Link>
      </Box>
      
    </>
  );
}
export default Login;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";


function Questionnaire() {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=> {
  if(!loading){
  if(!user) navigate("/")
  }
  },[loading, navigate, user])
  

  return (
    <>
      <div>
        <h1>Its the Questtionairre</h1>
      </div>
      
    </>
  );
}
export default Questionnaire;

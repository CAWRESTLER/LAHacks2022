import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useNavigate } from "react-router-dom";

import Main from '../Main';
import Login from '../Login';



function Landing() {
    let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
useEffect(()=> {
    if(!loading){
        if(!user){
            navigate("login");
        }
    }
},[loading, navigate, user])
  
  console.log(user);
  return (
    <div className="App">
      <Main /> 
    </div>
  );
}

export default Landing;

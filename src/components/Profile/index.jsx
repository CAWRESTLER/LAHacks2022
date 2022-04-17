import Button from "@mui/material/Button";
import { logout } from "../../firebase";


import PersonalProfileCard from '../Cards/ProfileCard';


const divStyle = {
    color: 'blue',
   paddingTop: 20,
   paddingLeft: 50,
  };

const logOut = {
    paddingTop: 40,
    paddingLeft: 50,
}

function Profile(){
    return(
        <>
       
      <div style = {divStyle}>
          <PersonalProfileCard />
      </div>
      <div style = {logOut}>
      <Button variant="contained" onClick={logout}>Sign Out</Button>

      </div>
        </>
    )
}
export default Profile

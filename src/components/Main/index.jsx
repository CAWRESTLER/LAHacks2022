import Button from "@mui/material/Button";
import { logout } from "../../firebase";
import Headerj from '../Header';

function Main(){
    return(
        <>
    

        <div>   
        <Headerj />

            <Button variant="contained" onClick={logout}>Sign Out</Button>
        </div>
        <div>

            This is the main page
            
             Go to Dogegram! Our Partner site to make your social experience with the world even more smooth!
            <a href="https://app.dogegram.xyz/">Dogegram</a>
        </div>
        </>
    )
}
export default Main

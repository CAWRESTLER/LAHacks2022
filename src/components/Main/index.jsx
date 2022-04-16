import Button from "@mui/material/Button";
import { logout } from "../../firebase";
import Headerj from '../Header ';

function Main(){
    return(
        <>
    

        <div>   
            <Button variant="contained" onClick={logout}>Sign Out</Button>
        </div>
        <div>

            This is the main page
        </div>
        </>
    )
}
export default Main
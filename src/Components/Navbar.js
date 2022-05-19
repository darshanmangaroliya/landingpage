import React from "react";
import {
  Button,
 
  
} from "@mui/material";

 
const Navbar = () => {
    
  return (
    <>
    
      <div className="navbarwrapper">
        <div className="logo"> your Logo</div>
        <div className="navbarbuttons">
          <div className="navbarbutton">home</div>
          <div className="navbarbutton">About us</div>
          <div className="navbarbutton">Search</div>
          <div className="navbarbutton">Blog</div>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
                Login
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained" color="error"s>
                REgister
                </Button>
        </div>
      </div>
      
              </>
    
  )
}

export default Navbar
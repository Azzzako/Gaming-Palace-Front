import React from "react";
import SideBar from "./SideBar";
import { Box } from "@mui/material"
import './Graphics.css'

function Graphics(){

    return(
        <Box  display="flex" >

            <SideBar/>

            <Box
                display="grid"
                height="30vh"
                width="2000px"
                margin="30px"
            >
                <div className="inConst">In construction</div>
            </Box>
        </Box>
    )
    
  };
  
  export default Graphics;
  
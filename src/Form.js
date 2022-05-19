import { VisibilityOff } from "@mui/icons-material";
import "./form.css";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';


import { Box } from "@mui/system";
import React from "react";
import Inputcomp from "./Components/Inputcomp";

const Form = () => {

 
  return (
    <>
    <div className="mainwrapper">
      <div>
        <h2 className ="heading">
          Member add
         </h2>
        </div> 
         
      <div className="wrapper">
        <Box
          component="form"
          sx={{
            width: 400,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <div className="vertically">
            <Inputcomp />
            <span className="shadow2">
              <FormControl
                sx={{
                  width: 400,
                  maxWidth: "100%",
                }}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </span>
          </div>
        </Box>
        <div className="selectdropdown ">
          <span className="shadow2">
            <FormControl
              variant="filled"
              sx={{
                width: 400,
                maxWidth: "100%",
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Select your Sangh
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
               
              >
                <MenuItem value="" className="selectmenu">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10} className="selectmenu" variant="filled">
                  Ten
                </MenuItem>
                <MenuItem value={10} className="selectmenu">
                  Ten
                </MenuItem>
                <MenuItem value={10} className="selectmenu">
                  Ten
                </MenuItem>
                <MenuItem value={10} className="selectmenu">
                  Ten
                </MenuItem>
              </Select>
            </FormControl>
          </span>
        </div>
      </div>

      <div className="button">
      <Button variant="contained">submit</Button>

      </div>
      </div>
    </>
  );
};

export default Form;

import React from "react";
import { TextField } from "@mui/material";

const Inputcomp = () => {
  const arr = [
    "Enter your first name",
    "enter your last name",
    "enter your phonenumber",
    "enter your trust registration number",
    "enter your sangh allocate unique id",
  ];
  return (
    <>
      {arr.map((e, i) => (
        <span className="shadow2" key={i}>
          <TextField
          fullWidth
            required
            id="fullWidth"
            label={e}
            defaultValue=""
            variant="filled"
          />
        </span>
      ))}
    </>
  );
};

export default Inputcomp;

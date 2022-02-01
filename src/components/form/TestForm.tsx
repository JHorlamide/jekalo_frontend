import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}));

export default function CustomizedInputs() {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Submitted", data);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        gap: 2
      }}
    >
      <FormControl variant="standard" onSubmit={(e) => handleSubmit(e)}>
        <InputLabel shrink htmlFor="bootstrap-input" sx={{color: 'blue', fontSize: '20px', fontWeight: 'bold'}}>
          Bootstrap
        </InputLabel>
        <BootstrapInput onChange={(e) => onChange(e)} defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
    </Box>
  );
}


 {/* <FormContainer component="form">
        <TextField
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="First Name"
        />
        <TextField
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="First Name"
        />
        <TextField
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="First Name"
        />
        <TextField
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="First Name"
        />
      </FormContainer> */}
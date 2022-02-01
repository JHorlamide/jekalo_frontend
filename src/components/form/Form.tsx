import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import {
  Container,
  FormContainer,
  ButtonContainer,
  BootstrapInput,
  InputLabel,
  Button
} from "./style";

const Form: React.FC = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    dateOfBirth: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>): void => {
    e.preventDefault();

    console.log("Submitted", data);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <FormContainer component="form" onSubmit={(e) => handleSubmit(e)}>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="firstName">
            First Name
          </InputLabel>
          <BootstrapInput
            name="firstName"
            onChange={(e) => onChange(e)}
            id="firstName"
          />
        </FormControl>

        <FormControl variant="standard" onSubmit={(e) => handleSubmit(e)}>
          <InputLabel shrink htmlFor="lastName">
            Last Name
          </InputLabel>
          <BootstrapInput
            name="lastName"
            onChange={(e) => onChange(e)}
            id="lastName"
          />
        </FormControl>

        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>

        <FormControl variant="standard" onSubmit={(e) => handleSubmit(e)}>
          <InputLabel shrink htmlFor="username">
            Username
          </InputLabel>
          <BootstrapInput
            name="username"
            onChange={(e) => onChange(e)}
            id="username"
          />
        </FormControl>

        <FormControl variant="standard" onSubmit={(e) => handleSubmit(e)}>
          <InputLabel shrink htmlFor="dateOfBirth">
            Date of Birth
          </InputLabel>
          <BootstrapInput
            name="dateOfBirth"
            onChange={(e) => onChange(e)}
            id="dateOfBirth"
          />
        </FormControl>
      </FormContainer>

      {/* <ButtonContainer>
        <Button
          type='submit'
        >
          Submit
        </Button>
      </ButtonContainer> */}
    </Container>
  );
};

export default Form;

import React from "react";
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import { styled } from "@mui/system";
import MuiBox from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const Container = styled(MuiBox)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "30px"
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <MuiBox>
          <Form />
        </MuiBox>

        <MuiBox sx={{marginTop: "40px"}}>
          <Users />
        </MuiBox>
      </Container>
    </React.Fragment>
  );
}

export default App;

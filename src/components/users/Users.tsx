import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Users = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: "rgba(17, 70, 143, 0.04)",
          padding: "20px",
          width: "40rem"
        }}
      >
        <Typography sx={{ color: "black" }}>Users</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Users;
import { alpha, styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiButton from "@mui/material/Button";

export const Container = styled(MuiBox)({
  display: "flex"
});

export const FormContainer = styled(MuiBox)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 20
});

export const InputLabel = styled(MuiInputLabel)({
  color: "#11468F",
  fontSize: "20px",
  fontWeight: "bold"
});

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
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
      "Roboto"
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}));

export const ButtonContainer = styled(MuiBox)({
  display: "inline-block"
});

export const Button = styled(MuiButton)({
  background: "#11468F",
  color: "#fff",
  margin: "20px",
  paddingLeft: "50px",
  paddingRight: "50px",
  borderRadius: "6px",
  "&: hover": {
    background: "#11468F",
    color: "#fff"
  }
});

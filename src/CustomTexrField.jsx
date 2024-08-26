import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.common.white, 0.5),
    },
  },
  "& .MuiInputBase-input": {
    color: theme.palette.common.white,
  },
  "& .MuiInputLabel-root": {
    color: alpha(theme.palette.common.white, 0.7),
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.common.white,
  },
}));

export default CustomTextField;

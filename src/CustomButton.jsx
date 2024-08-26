import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "bold",
  color: theme.palette.common.black,
  background:
    "linear-gradient(90deg, rgba(187,186,166,1) 0%, rgba(254,252,225,1) 51%, rgba(254,252,225,1) 100%)",
  border: "none",

  transition: "background 1s ease",
}));

export default CustomButton;

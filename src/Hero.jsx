/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CustomButton from "./CustomButton";
import theme from "./Theme";

export default function CustomComponent() {
  const theme = useTheme();
  const rotated = useMediaQuery(theme.breakpoints.down("1040"));

  return (
    <Box sx={{ py: 9, backgroundColor: theme.palette.primary.sides }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: rotated ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mx: rotated ? "5%" : "10%",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={rotated ? "center" : "flex-start"}
          sx={{
            width: rotated ? "100%" : "50%",
            minWidth: rotated ? "100%" : "50%",
            textAlign: rotated ? "center" : "left",
            mb: rotated ? 4 : 0,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            mb={2}
            justifyContent={rotated ? "center" : "flex-start"}
          >
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
              alt="✨"
              width="32"
              height="32"
            />
            <Typography variant="body1" sx={{ ml: 1, color: "#bbbaa6b3" }}>
              Award Winning Branding Expert
            </Typography>
          </Box>
          <Typography
            component={rotated ? "h4" : "h6"}
            variant="h2"
            sx={{
              mb: 2,
              color: theme.palette.primary.customText,
              fontWeight: "400",
            }}
          >
            Bring your vision to ultimate reality
          </Typography>
          <Typography
            variant="body1"
            color={"#bbbaa6b3"}
            fontSize={rotated ? "16px" : "18px"}
            lineHeight={"1.6"}
            paragraph
          >
            Specialize in creating unique visual identities for digital products
            and believe that a stunning design starts with common values, open
            communication, and respect for your audience.
          </Typography>
          <Box
            display="flex"
            flexDirection={rotated ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <CustomButton
              sx={{
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(254,252,225,1) 0%, rgba(254,252,225,1) 49%, rgba(187,186,166,1) 100%)",
                },
              }}
            >
              View Portfolio
            </CustomButton>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                "&:hover": {
                  color: "#bbbaa6b3",
                },
              }}
              href="#"
              startIcon={<EmailOutlinedIcon />}
            >
              m.k.h.6.10.01@gmail.com
            </Button>
          </Box>
        </Box>
        <Box
          position="relative"
          sx={{
            width: rotated ? "100%" : "50%",
            display: "flex",
            justifyContent: rotated ? "center" : "flex-end",
            alignItems: "center",
          }}
          mt={rotated ? 4 : 0}
        >
          <img
            style={{
              borderRadius: "500px",
              width: "fit-content",
              height: "500px",
            }}
            src="My Image.jpg"
            alt="About"
          />
        </Box>
      </Box>
    </Box>
  );
}

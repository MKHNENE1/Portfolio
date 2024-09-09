/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, IconButton, Grid, Link } from "@mui/material";
import { LinkedIn, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { FaBehance } from "react-icons/fa";
import theme from "./Theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.primary.sides,
        borderTop: "1px solid #bbbaa633",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Box sx={{ marginY: "30px" }}>
        <Grid container spacing={4} justifyContent="center">
          {["services", "works", "about", "testimonials", '"say hello"'].map(
            (label, index) => (
              <Grid
                item
                key={index}
                sx={{
                  fontSize: 20,
                  textTransform: "capitalize",
                  color: "#bbbaa6",
                  transition: "0.5s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                <Link href="#home" color="inherit" underline="none">
                  {label}
                </Link>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <IconButton
            sx={{
              color: "#bbbaa6",
              transition: "0.5s ease",

              "&:hover": { color: "white", backgroundColor: "transparent" },
            }}
          >
            <Instagram fontSize="30px" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "#bbbaa6",
              transition: "0.5s ease",
              "&:hover": { color: "white", backgroundColor: "transparent" },
            }}
          >
            <XIcon fontSize="30px" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "#bbbaa6",
              transition: "0.5s ease",
              "&:hover": { color: "white", backgroundColor: "transparent" },
            }}
          >
            <LinkedIn fontSize="30px" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "#bbbaa6",
              transition: "0.5s ease",
              "&:hover": { color: "white", backgroundColor: "transparent" },
            }}
          >
            <FaBehance fontSize="30px" />
          </IconButton>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          marginTop: "20px",
          color: "#8f8e80",
          fontSize: 20,
          mb: 2,
        }}
      >
        &copy; 2024 MKH. All rights reserved.
      </Typography>
    </Box>
  );
}

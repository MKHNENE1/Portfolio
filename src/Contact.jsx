/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography, Button, Grid, Box, alpha } from "@mui/material";
import CustomTextField from "./CustomTexrField";
import theme from "./Theme";
import CustomButton from "./CustomButton";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          py: { xs: 6, sm: 8, md: 12 }, // Responsive padding
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: theme.palette.primary.customText }}
              gutterBottom
            >
              It's time to talk about your project.
            </Typography>
            <Typography
              variant="body1" // Use `body1` instead of `p` for consistency with MUI typography
              sx={{ mb: 0, color: alpha(theme.palette.common.white, 0.5) }}
            >
              Let’s embark on a creative journey together by shaping a visual
              narrative of your brand in the crowded digital space.
            </Typography>
            {[
              {
                icon: (
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                ),
                title: "Phone",
                content: "+20 109 710 5269",
              },
              {
                icon: (
                  <EmailOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
                ),
                title: "Email",
                content: "mohamedhalabya11@gmail.com",
              },
              {
                icon: (
                  <LocationOnOutlinedIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                ),
                title: "Address",
                content: (
                  <>
                    <span>Port Said, Egypt</span>
                    <br />
                    <span>Cairo, Egypt</span>
                  </>
                ),
              },
            ].map(({ icon, title, content }, index) => (
              <Box
                key={index}
                sx={{ mt: 4, display: "flex", alignItems: "center" }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.box,
                    p: 2,
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                  }}
                >
                  {icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: alpha(theme.palette.common.white, 0.5),
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: alpha(theme.palette.common.white, 0.9),
                      fontSize: { xs: 16, sm: 18, md: 20 }, // Responsive font size
                    }}
                  >
                    {content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <Container
              sx={{
                backgroundColor: theme.palette.primary.box,
                borderRadius: "20px",
                padding: { xs: 2, sm: 3 }, // Responsive padding
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {[
                    { placeholder: "Name", type: "text" },
                    { placeholder: "Email", type: "email" },
                    {
                      placeholder: "Message",
                      type: "text",
                      multiline: true,
                      rows: 6,
                    },
                  ].map(({ placeholder, type, multiline, rows }, index) => (
                    <Grid item xs={12} key={index}>
                      <CustomTextField
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: "10px",
                        }}
                        fullWidth
                        placeholder={placeholder}
                        variant="outlined"
                        type={type}
                        multiline={multiline}
                        rows={rows}
                        required
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <CustomButton
                      variant="contained"
                      type="submit"
                      sx={{
                        mb: 3,
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(254,252,225,1) 0%, rgba(254,252,225,1) 49%, rgba(187,186,166,1) 100%)",
                        },
                      }}
                    >
                      Send Message
                    </CustomButton>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
    // ------------------------------------------------------------------------
  );
};

export default Contact;

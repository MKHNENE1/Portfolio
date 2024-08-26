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
          width: "100%",
          // backgroundColor: theme.palette.primary.test,
          py: 12,
        }}
      >
        <Container
          sx={{
            pt: 3,
            // width: "50%",
            // backgroundColor: theme.palette.primary.box,
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
            variant="p"
            sx={{ mb: 0, color: alpha(theme.palette.common.white, 0.5) }}
          >
            Let’s embark on creative journey together by shaping a visual
            narrative of your brand in the crowded digital space.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.box,
                width: "fit-content",
                p: 2,
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                mr: 3,
              }}
            >
              <LocalPhoneOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: 30,
                }}
              ></LocalPhoneOutlinedIcon>
            </Box>
            <Box>
              <Typography
                sx={{ color: alpha(theme.palette.common.white, 0.5), mb: 1 }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.9),
                  fontSize: 20,
                }}
              >
                +20 109 710 5269
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.box,
                width: "fit-content",
                p: 2,
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                mr: 3,
              }}
            >
              <EmailOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: 30,
                }}
              ></EmailOutlinedIcon>
            </Box>
            <Box>
              <Typography
                sx={{ color: alpha(theme.palette.common.white, 0.5), mb: 1 }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.9),
                  fontSize: 20,
                }}
              >
                mohamedhalabya11@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.box,
                width: "fit-content",
                p: 2,
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                mr: 3,
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: 30,
                }}
              ></LocationOnOutlinedIcon>
            </Box>
            <Box>
              <Typography
                sx={{ color: alpha(theme.palette.common.white, 0.5), mb: 1 }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.9),
                  fontSize: 20,
                }}
              >
                <span>Port Said, Egypt</span>
                <br />
                <span>Cairo, Egypt</span>
              </Typography>
            </Box>
          </Box>
        </Container>

        <Container sx={{}}>
          <Container
            sx={{
              backgroundColor: theme.palette.primary.box,
              borderRadius: "20px",
              // width: "50%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container px={3} py={3} spacing={3}>
                <Grid item xs={12}>
                  <CustomTextField
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "10px",
                    }}
                    fullWidth
                    placeholder="Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "10px",
                    }}
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "10px",
                    }}
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "10px",
                    }}
                    fullWidth
                    placeholder="Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    required
                  />
                </Grid>
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
        </Container>
      </Container>
    </>
    // ------------------------------------------------------------------------
  );
};

export default Contact;

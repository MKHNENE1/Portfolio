/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import ArrowIcon from "./ArrowIcon";
import theme from "./Theme";
import CustomButton from "./CustomButton";

const worksData = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "snow.png",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "logo on dark wall.png",
  },
  {
    title: "Project Three",
    description: "Description for project Three.",
    image: "Untitled-1.png",
  },
  {
    title: "Project Four",
    description: "Description for project Four.",
    image: "thunder logo.png",
  },
];

const MyWork = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: theme.palette.primary.customText,
            fontSize: { xs: "h4.fontSize", md: "h3.fontSize" },
          }}
        >
          Works
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <CustomButton
            sx={{
              minWidth: 90,
              mb: { xs: 1, sm: 0 },
              mr: { sm: 3 },
              padding: "5px 20px",
            }}
          >
            All
          </CustomButton>
          {["Branding", "Product", "UX/UI"].map((label, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                borderRadius: "50px",
                padding: "5px 20px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#bbbaa6",
                minWidth: 90,
                mb: { xs: 1, sm: 0 },
                mr: { sm: 2 },
                borderColor: "#bbbaa6",
                "&:hover": {
                  borderColor: "#bbbaa6",
                  color: "white",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {worksData.map((work, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                borderRadius: "25px",
                "&:hover .CardMedia": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  mx: 2.5,
                  mt: 2.5,
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="500"
                  image={work?.image}
                  className="CardMedia"
                  alt={work?.title}
                  sx={{
                    transition: "0.7s ease",
                  }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  display={"flex"}
                  justifyContent={"space-between"}
                  color="textPrimary"
                >
                  {work?.title}
                  <Typography color={"textSecondary"}>
                    <ArrowIcon></ArrowIcon>
                  </Typography>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {work?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyWork;

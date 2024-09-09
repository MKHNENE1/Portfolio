import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomButton from "./CustomButton";
import theme from "./Theme";
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function CustomAppBar() {
  const [open, setOpen] = React.useState(false);
  const hideLinks = useMediaQuery((theme) => theme.breakpoints.down("1040"));

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const menuItems = [
    "services",
    "works",
    "about",
    "testimonials",
    '"say hello"',
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          flexGrow: 2,
          background: theme.palette.primary.sides,
        }}
      >
        <Toolbar
          sx={{
            mx: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
            px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mohamed Halabia
          </Typography>

          {hideLinks ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                  width: 250,
                }}
              >
                <Box
                  sx={{
                    width: 250,
                    padding: 2,
                    backgroundColor: theme.palette.primary.sides,
                    height: "100%",
                  }}
                >
                  {menuItems.map((label, index) => (
                    <Button
                      key={index}
                      sx={{
                        display: "block",
                        width: "100%",
                        mb: 1,
                        textAlign: "left",
                        fontSize: 17,
                        textTransform: "capitalize",
                        color: "#bbbaa6",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "white",
                        },
                      }}
                      onClick={handleDrawerClose}
                    >
                      {label}
                    </Button>
                  ))}
                  <CustomButton
                    sx={{
                      width: "100%",
                      mt: 2,
                      transition: "1s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(254,252,225,1) 0%, rgba(254,252,225,1) 49%, rgba(187,186,166,1) 100%)",
                      },
                    }}
                  >
                    Hire Me
                  </CustomButton>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 5 }}>
              {menuItems.map((label, index) => (
                <Button
                  key={index}
                  sx={{
                    padding: "0",
                    fontSize: 17,
                    textTransform: "capitalize",
                    color: "#bbbaa6",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
              <CustomButton
                sx={{
                  px: 3.5,
                  transition: "1s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(254,252,225,1) 0%, rgba(254,252,225,1) 49%, rgba(187,186,166,1) 100%)",
                  },
                }}
              >
                Hire Me
              </CustomButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

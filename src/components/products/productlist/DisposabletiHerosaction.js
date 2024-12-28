import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import disposableHerosection from '../../../assets/images/products/disposableHerosection1.webp'



function Herosection() {

const navigate = useNavigate()

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${disposableHerosection})`,
          width: "100%",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center", // Centers the image in the box
        }}
      >
        <Container maxWidth>
          <Typography
           variant="h2"
           sx={{
              color:"white",
              fontSize: { xs: "32px", sm: "42px", md: "52px" }, // Responsive font size
              fontWeight: "600",
              mb: 2,
            }}
          >
            Product
          </Typography>
          <Box sx={{ display: "flex", gap: 1, py: 1,alignItems:"center" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color:"white",
                ":hover":{color:"#DF3E26"}
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
            <ArrowForwardIcon
              sx={{
                color: "red",
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                mx: 1, // Margin-left and margin-right
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                display: "flex",
                alignItems: "center",
                color:"white"
              }}
            >
              Products
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Herosection;

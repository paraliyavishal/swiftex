import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import serviceHerosection from '../../assets/images/services/serviceHerosection.webp'

function Herosection() {
  const navigate = useNavigate("");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(119,119,119,0.26290266106442575),rgba(119,119,119,0.26290266106442575)),url(${serviceHerosection})`,
          width: "100%",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth>
          <Typography
           variant="h2"
           sx={{
              color:"white",
              fontSize: { xs: "32px", sm: "42px", md: "52px" },
              fontWeight: "600",
              mb: 2,
            }}
          >
            Services
          </Typography>
          <Box sx={{ display: "flex", gap: 1, py: 1,alignItems:"center" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" },
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
                fontSize: { xs: "18px", sm: "20px", md: "25px" },
                mx: 1,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" },
                display: "flex",
                alignItems: "center",
                color:"white"
              }}
            >
              Services
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Herosection;

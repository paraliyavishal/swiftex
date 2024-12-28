import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Provide1 from "../../assets/images/services/servicesimg1 (1).webp";
import Provide2 from "../../assets/images/services/servicesimg2.webp";
import Provide3 from "../../assets/images/services/servicesimg3.webp";
import { useNavigate } from "react-router-dom";

// Logistics services data array
const logisticsServices = [
  {
    id: 1,
    title: "ROAD FREIGHT SHIPPING",
    description:
      "Road freight shipping is a vital component of the logistics and transportation industry, providing flexible and reliable solutions",
    image: Provide1,
    link: "/services",
  },
  {
    id: 2,
    title: "AIR FREIGHT SHIPPING",
    description:
      "Air freight shipping is a crucial component of the global logistics network, enabling the rapid transportation of goods across vast distances",
    image: Provide2,
    link: "/services",
  },
  {
    id: 3,
    title: "OCEAN FREIGHT SHIPPING",
    description:
      "Ocean freight shipping is a fundamental component of global trade, providing a cost-effective and efficient means of transporting",
    image: Provide3,
    link: "/services",
  },
];

function ProvideLogistics() {
  const navigate = useNavigate();

  return (
      <Box py={3}>
        <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "38px",
                md: "40px",
                lg: "48px",
                xl: "56px",
              },
              fontWeight: "600",
              fontFamily: "'Public Sans', sans-serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Services
          </Typography>
          <Grid container item xs={12} spacing={3} py={4}>
            {logisticsServices.map((service) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={service.id}>
                <Box
                  sx={{
                    boxShadow: "5px 5px 10px #d1d1d1",
                    p: 2,
                    borderRadius: "30px",
                  }}
                >
                  <Box
                    onClick={() => navigate(service.link)}
                    sx={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      position: "relative",
                      marginBottom: "20px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: {
                        xs: "1.5rem", 
                        sm: "1.50rem", 
                      },
                      fontWeight: "600",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      borderBottom: "3px solid black",
                      width: "16%",
                      marginBottom: "15px",
                    }}
                  >
                  </Typography>
                  <Typography
                    sx={{
                      color: "#00000080",
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </Box>
  );
}

export default ProvideLogistics;

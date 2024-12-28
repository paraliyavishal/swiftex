import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import mask1 from "../../assets/images/products/OnionPowder/onionPowder.webp";
import mask2 from "../../assets/images/products/Aluminium/MainAluminium.webp";
import mask3 from "../../assets/images/products/Disposable/disposableitem.webp";
import { useNavigate } from "react-router-dom";

const CustomCard = styled(Box)(({ backgroundImg, isClicked }) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  "&:hover .content-box": {
    opacity: 1,
    transform: "translate(-0%, 0%)",
  },
  "& .content-box": {
    opacity: isClicked ? 1 : 0,
    transform: isClicked ? "translate(-0%, 0%)" : "translate(50%, 50%)",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "100%",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  borderRadius: "20px",
  backgroundColor: "#e13f2680",
  opacity: 0,
  transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    bottom: -43,
    right: -43,
    background: `linear-gradient(135deg,#e13f2680)`,
    height: 62,
    width: 62,
    borderRadius: "50%",
    transition: "transform 0.35s ease-out",
  },
  "&:hover:before": {
    transform: "scale(28)",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  margin: "10px 0 0",
  fontSize: "14px",
  color: "#fff",
  lineHeight: 1.4,
  border: "2px solid white",
  borderRadius: "10px",
  padding: "10px",
}));

function HomeProducts() {
  const [clickedCard, setClickedCard] = useState(null);
  const handleClick = (index) => {
    setClickedCard(index === clickedCard ? null : index);
  };

  const navigate = useNavigate();

  const products = [
    {
      name: "Onion",
      country: "India",
      shelfLife: "1 - 2 years",
      packaging: "stand-up pouches , Plastic Jars",
      buyerLocation: "Restaurant Industries ",
      image: mask1,
    },
    {
      name: "Aluminium",
      country: "India",
      shelfLife: "10 - 20 year",
      packaging: "Rolls , Sheets , Wraps",
      buyerLocation: "Stors , Ware House , Retailers",
      image: mask2,
    },
    {
      name: "DisposableItems",
      country: "India",
      shelfLife: "1 - 3 year",
      packaging: "cartons",
      buyerLocation: "Catering , Events , Retail",
      image: mask3,
    },
  ];

  return (
    <Box py={5}>
      <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
        <Box>
          <Typography
            component={"h3"}
            pb={4}
            sx={{
              fontSize: {
                xs: "38px",
                md: "40px",
                lg: "48px",
                xl: "52px",
              },
              textAlign: "center",
              fontWeight: "600",
              color: "black",
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            Our Product
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                onClick={() => navigate("/products")}
              >
                <Box>
                  <CustomCard
                    backgroundImg={product.image}
                    isClicked={clickedCard === index}
                    onClick={() => handleClick(index)}
                    sx={{cursor:"pointer"}}
                  >
                    <ContentBox className="content-box">
                      <Description>
                        <Typography
                          py={1}
                          sx={{ fontFamily: "'Public Sans', sans-serif", }}
                        >
                          Product Name: {product.name}
                        </Typography>
                        <Typography
                          py={1}
                          sx={{ fontFamily: "'Public Sans', sans-serif" }}
                        >
                          Country of Origin: {product.country}
                        </Typography>
                        <Typography
                          py={1}
                          sx={{ fontFamily: "'Public Sans', sans-serif" }}
                        >
                          Shelf Life: {product.shelfLife}
                        </Typography>
                        <Typography
                          py={1}
                          sx={{ fontFamily: "'Public Sans', sans-serif" }}
                        >
                          Packaging Type: {product.packaging}
                        </Typography>
                        <Typography
                          py={1}
                          sx={{ fontFamily: "'Public Sans', sans-serif" }}
                        >
                          Preferred Buyer Location: {product.buyerLocation}
                        </Typography>
                      </Description>
                    </ContentBox>
                  </CustomCard>
                  <Typography
                    variant="h3"
                    sx={{
                      borderBottom: "3px solid black",
                      marginLeft: "10px",
                      paddingTop: "10px",
                      fontWeight: "600",
                      fontSize: {
                        xs: "30px",
                        md: "28px",
                      },
                      fontFamily: "'Public Sans', sans-serif",
                      width: "15%",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default HomeProducts;

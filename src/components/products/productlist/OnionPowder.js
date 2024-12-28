import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import onionimg1 from "../../../assets/images/products/OnionPowder/miniRedOnion.webp";
import onionimg2 from "../../../assets/images/products/OnionPowder/MiniWhite.webp";
import onionimg3 from "../../../assets/images/products/OnionPowder/MiniDehydrated.webp";

import RedOnion from "../../../assets/images/products/OnionPowder/redOnion.webp";
import WhiteOnion from "../../../assets/images/products/OnionPowder/WhitePow.webp";
import DehydratedOnion from "../../../assets/images/products/OnionPowder/DehydratedOnion.webp";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import Footer from "../../../commoncomponent/footer/Footer";
import Herosection from "../productlist/OnionHerosaction";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const OnionPow = [
  {
    id: 6,
    imgSrc: onionimg1,
    img1: RedOnion,
    name: "Red Onion Powder",
    containe1:
      "Swiftex Overseas proudly exports premium quality Red Onions from India, known for their rich flavor and freshness. Our red onions are carefully sourced, meeting international standards for size, quality, and taste. We ensure timely delivery and seamless export logistics, providing customized solutions to global markets. Trust Swiftex Overseas for reliable, top-grade Red Onion exports worldwide.",
    Country: "India",
    Shelflife: "1 - 2 year",
    PackagingTyp: "stand-up pouches , Plastic Jars",
    buyerLocation: " Restaurant Industries ",
    containe2:
      "Red onion powder is a finely ground, dehydrated form of red onions, used as a flavorful seasoning in various culinary applications",
  },
  {
    id: 7,
    imgSrc: onionimg2,
    img1: WhiteOnion,
    name: "White Onion Powder",
    containe1:
      "At Swiftex Overseas, we specialize in exporting premium White Onion Powder made from carefully selected, fresh Indian white onions. Our white onion powder is expertly dehydrated and finely ground to retain its natural flavor and essential nutrients, making it an ideal ingredient for various culinary and food processing applications. With its mild, sweet taste and longer shelf life, it provides a convenient alternative to fresh onions for global markets.",
    Country: "India",
    Shelflife: "1 - 2 year",
    PackagingTyp: "stand-up pouches , Plastic Jars",
    buyerLocation: " Restaurant Industries ",
    containe2:
      "Red onion powder is a finely ground, dehydrated form of red onions, used as a flavorful seasoning in various culinary applications",
  },
  {
    id: 8,
    imgSrc: onionimg3,
    img1: DehydratedOnion,
    name: "Dehydrated Onion Powder",
    containe1:
      "Dehydrated onion powder is a versatile ingredient made from fresh onions that have been dried and ground into a fine powder. This product captures the rich flavor and aroma of fresh onions, making it a convenient alternative for various culinary applications.",
    Country: "India",
    Shelflife: "1 - 2 year",
    PackagingTyp: "stand-up pouches , Plastic Jars",
    buyerLocation: " Restaurant Industries ",
    containe2:
      "Red onion powder is a finely ground, dehydrated form of red onions, used as a flavorful seasoning in various culinary applications",
  },
];

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

function OnionPowder() {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <Navbar />
      <Herosection />
      <Box padding={"100px 0"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "38px",
                md: "40px",
                lg: "48px",
                xl: "56px",
              },
              fontWeight: "600",
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            Onion Powder
          </Typography>
        </Box>
        <Container sx={{maxWidth:{lg:"xl",xs:"lg"}}}>
          <Grid
          mt={5}
            container
            spacing={3}
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "start",
                md: "start",
                sm: "start",
                xs: "center",
              },
            }}
          >
            {OnionPow.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={index}
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <CustomCard backgroundImg={item.imgSrc}>
                  <ContentBox className="content-box">
                    <Button
                      sx={{
                        fontFamily: "'Public Sans', sans-serif",
                        border: "1px solid white",
                        color: "white",
                        ":hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                        padding: "10px",
                      }}
                    >
                      Read More...
                    </Button>
                  </ContentBox>
                </CustomCard>
                <Box sx={{ marginLeft: "15px", mt: 2 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: {
                        xs: "30px",
                        md: "32px",
                      },
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      borderBottom: "3px solid black",
                      width: "16%",
                      marginBottom: "50px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default OnionPowder;

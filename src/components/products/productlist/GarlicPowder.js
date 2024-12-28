import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import garlicimg1 from "../../../assets/images/products/Garlic/MiniCrem.webp";
import CreamGarlic from "../../../assets/images/products/Garlic/CremGarlic.webp";
import Dehydrated from "../../../assets/images/products/Garlic/Dehydrated.webp";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import Herosection from "../productlist/GarlicHerosaction";
import Footer from "../../../commoncomponent/footer/Footer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const garlicItems = [
  {
    id: 9,
    img: garlicimg1,
    img1: CreamGarlic,
    name: "Cream Dehydrated Garlic ",
    containe1:
      "Cream Dehydrated Garlic Powder is made from premium garlic bulbs, ensuring top-notch quality. The fine texture of the powder makes it easy to blend into recipes, distributing flavor evenly.",
    Country: "India",
    Shelflife: "2 - 3 year",
    PackagingTyp: "Glass Jar , Pouches",
    buyerLocation: "culinary, commercial, and industrial application",
    containe2:
      "Cream dehydrated garlic brings a luxurious, silky garlic essence to your cooking, infusing dishes with a deep, savory richness that turns everyday recipes into gourmet delights.",
  },
  {
    id: 10,
    img:Dehydrated,
    img1:Dehydrated,
    name: "Dehydrated Garlic Powder",
    containe1:
      "Cream Dehydrated Garlic Powder is made from premium garlic bulbs, ensuring top-notch quality. The fine texture of the powder makes it easy to blend into recipes, distributing flavor evenly.",
    Country: "India",
    Shelflife: "2 - 3 year",
    PackagingTyp: "Glass Jar , Pouches",
    buyerLocation: "culinary, commercial, and industrial application",
    containe2:
      "Cream dehydrated garlic brings a luxurious, silky garlic essence to your cooking, infusing dishes with a deep, savory richness that turns everyday recipes into gourmet delights.",
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

function GarlicPowder() {

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
          <Typography variant="h1"
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
            Garlic Powder
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
              justifyContent: "center",
            }}
          >
            {garlicItems.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <CustomCard backgroundImg={item.img}>
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

export default GarlicPowder;

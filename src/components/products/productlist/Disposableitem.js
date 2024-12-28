import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import disposableimg1 from "../../../assets/images/products/Disposable/miniBowl.webp";
import disposableimg2 from "../../../assets/images/products/Disposable/miniPlate.webp";
import disposableimg3 from "../../../assets/images/products/Disposable/minispoon.webp";
import disposableimg4 from "../../../assets/images/products/Disposable/minifrock.webp";
import disposableimg5 from "../../../assets/images/products/Disposable/minibagass.webp";
import { useNavigate } from "react-router-dom";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import Herosection from "../../../components/products/productlist/DisposabletiHerosaction";
import Footer from "../../../commoncomponent/footer/Footer";
import bowl from "../../../assets/images/products/Disposable/bowl.webp";
import plate from "../../../assets/images/products/Disposable/plate.webp";
import spoon from "../../../assets/images/products/Disposable/spoon.webp";
import frocke from "../../../assets/images/products/Disposable/FROCK.webp";
import bagasse from "../../../assets/images/products/Disposable/bagasse.webp";

export const data = [
  {
    id: 1,
    img: disposableimg1,
    img1: bowl,
    name: "Bowl",
    containe1:
      "disposable bowls are crafted with the highest quality materials, designed to meet both sustainability and functionality needs. Available in various sizes, these bowls are perfect for serving soups, salads, and other meals, ideal for catering services, food chains, restaurants, and personal use.",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 2,
    img: disposableimg2,
    img1: plate,
    name: "Plate",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 3,
    img: disposableimg3,
    img1: spoon,
    name: "Spoon",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 4,
    img: disposableimg4,
    img1: frocke,
    name: "Frocke ",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. He re is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 5,
    img: disposableimg5,
    img1: bagasse,
    name: "bagasse",
    containe1:
      "Bagasse bowls are made from the fibrous pulp that remains after extracting juice from sugarcane, making them an eco-friendly and biodegradable alternative to plastic.",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
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

function DisposableItem() {
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
              fontSize: { lg: "56px", sm: "46px", xs: "36px" },
              fontWeight: "600",
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            Disposable Item
          </Typography>
        </Box>
        <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid
              mt={5}
                item
                xs={12}
                sm={6}
                lg={4}
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
                <Typography
                  sx={{
                    borderBottom: "3px solid black",
                    marginLeft: "10px",
                    paddingTop: "10px",
                    fontWeight: "600",
                    fontSize: "26px",
                    fontFamily: "'Public Sans', sans-serif",
                    width: "15%",
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
export default DisposableItem;

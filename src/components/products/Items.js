import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../commoncomponent/header/Header";
import Navbar from "../../commoncomponent/header/Navbar";
import Footer from "../../commoncomponent/footer/Footer";
import { data } from "./productlist/Disposableitem";
import { OnionPow } from "./productlist/OnionPowder";
import { garlicItems } from "./productlist/GarlicPowder";
import { product } from "./OurProduct";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bowl from '../../assets/images/products/Disposable/bowl1.webp'
import frock from '../../assets/images/products/Disposable/frock1.webp'
import spoon from '../../assets/images/products/Disposable/spoon1.webp'
import plate from '../../assets/images/products/Disposable/plate1.webp'
import bagasse from '../../assets/images/products/Disposable/bagasse1.webp'
import onionPowder from '../../assets/images/products/OnionPowder/onionPowder1.webp'
import whiteOnionPowder from '../../assets/images/products/OnionPowder/whiteOnionPowder1.webp'
import dehydratedOnionPowder from '../../assets/images/products/OnionPowder/dehydratedOnionPowder1.webp'
import creamGarlic from '../../assets/images/products/Garlic/CremGarlic1.webp'
import dehydratedGarlicPowder from '../../assets/images/products/Garlic/dehydratedGarlicPowder1.webp'
import Aluminium from '../../assets/images/products/Aluminium/Aluminium1.webp'
import cotton from '../../assets/images/products/Cotton/cotton1.webp'

function Items() {
  const { id } = useParams();
  console.log(id);

  // Find matching data in both `data` and `OnionPow`
  const dataDetails = data.find((item) => item.id == id);
  const onionDetails = OnionPow.find((item) => item.id == id);
  const Product = product.find((item) => item.id == id);
  const garlicItemsDetails = garlicItems.find((item) => item.id == id);

  // Combine both results into one object
  const details = dataDetails || onionDetails || garlicItemsDetails || Product; // Prioritize `dataDetails`, or use `onionDetails` if not found

  console.log(details);

  const navigate = useNavigate();

  const imageList = [
    { id: "1", imagesrc: bowl },
    { id: "2", imagesrc: plate },
    { id: "3", imagesrc: spoon },
    { id: "4", imagesrc: frock },
    { id: "5", imagesrc: bagasse },
    { id: "6", imagesrc: onionPowder },
    { id: "7", imagesrc: whiteOnionPowder },
    { id: "8", imagesrc: dehydratedOnionPowder },
    { id: "9", imagesrc: creamGarlic },
    { id: "10", imagesrc: dehydratedGarlicPowder },
    { id: "11", imagesrc: Aluminium },
    { id: "12", imagesrc: cotton },
  ];

  const imageData = imageList.find((img) => img.id === id);
  return (
    <Box>
      <Header />
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", sm: "70vh", md: "80vh" }, // Responsive height
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        {imageData && (
          <img
            src={imageData.imagesrc} // Dynamically load Image based on ID
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
              filter: "grayscale(10%) blur(1px)",
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.34)", // Black with 34% opacity
            zIndex: 0, // Ensure overlay is above the Iamge but below text
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            position: "relative", // Make sure container is above the Image
            zIndex: 1,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "42px", md: "52px" }, // Responsive font size
              fontWeight: "600",
              mb: 2, // Margin-bottom
            }}
          >
            Product
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
            <Typography>
              <Typography variant="h5"
                onClick={() => navigate("/products")}
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                    mx: 1, // Margin-left and margin-right
                  }}
                />
                Product
              </Typography>
            </Typography>
            <Typography>
              <Typography variant="h5"
                onClick={() => navigate("/products")}
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                    mx: 1, // Margin-left and margin-right
                  }}
                />
                {details?.name}
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 10, sm: 5, md: 5 } }}>
        <Container sx={{maxWidth:{lg:"xl",xs:"lg"}}}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "56px", sm: "46px", xs: "36px" },
                fontWeight: "600",
                textAlign: "center",
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              Product Information
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
                color: "#808080",
                fontFamily: "'Public Sans', sans-serif",
                pt: { xs: 3, sm: 4, md: 5 },
              }}
            >
              {details?.containe1}
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: 5, sm: 10, md: 15 } }}>
            <Grid
              container
              item
              xs={12}
              spacing={10}
              display={"flex"}
              justifyContent={"center"}
            >
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <img
                    src={details?.img1}
                    alt="Product"
                    className="img-fluid"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
                <Box>
                  <Typography
                    sx={{
                      display:{lg:"flex",sm:"flex",xs:"block"},
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt: 3,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Product Name:
                    <Typography
                      sx={{
                        fontSize:"18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.name}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display:{lg:"flex",sm:"flex",xs:"block"},
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt:{lg:7,xs:2},
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Country of Origin:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.Country}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display:{lg:"flex",sm:"flex",xs:"block"},
                      alignItems: "center",
                      fontSize:"18px",
                      fontWeight: "600",
                      pt:{lg:7,xs:2},
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Shelf Life:
                    <Typography
                      sx={{
                        fontSize:"18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.Shelflife}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display:{lg:"flex",sm:"flex",xs:"block"},
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt:{lg:7,xs:2},
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Packaging Type:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.PackagingTyp}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display:{lg:"flex",sm:"flex",xs:"block"},
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt:{lg:7,xs:2},
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Preferred Buyer Location:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.buyerLocation}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box py={10}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                color: "#808080",
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              {details?.containe2}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Items;

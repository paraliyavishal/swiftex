import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import productimg1 from "../../assets/images/products/OnionPowder/onionPowder.webp";
import productimg2 from "../../assets/images/products/Garlic/MainGarlic.webp";
import productimg3 from "../../assets/images/products/Aluminium/MainAluminium.webp";
import productimg4 from "../../assets/images/products/Disposable/disposableitem.webp";
import productimg5 from "../../assets/images/products/Cotton/MainCotton.webp";
import aluminium from "../../assets/images/products/Aluminium/Aluminium.webp";
import Cotton from "../../assets/images/products/Cotton/Cotton.webp";
import { useNavigate } from "react-router-dom";

export const product = [
  {
    id: 11,
    img1: aluminium,
    name: "Aluminium Foil",
    containe1:
      "Aluminum foil is a versatile packaging material widely used in food preservation, cooking, and storage. Its excellent barrier properties keep moisture and odors out, ensuring freshness and flavor retention.",
    Country: "India",
    Shelflife: "10 - 20 year",
    PackagingTyp: "Rolls , Sheets , Wraps",
    buyerLocation: "Stors , Ware House , Retailers",
    containe2:
      "Aluminum foil is a lightweight, durable material perfect for preserving food freshness and enhancing cooking efficiency.",
  },
  {
    id: 12,
    img1: Cotton,
    name: "Row Cotton Fabric",
    containe1:
      "Row cotton fabric is a durable and breathable textile, ideal for a variety of applications including apparel, home decor, and crafts. Its soft texture and natural fibers make it comfortable for everyday wear while being easy to care for.",
    Country: "India",
    Shelflife: "1 - 2 year",
    PackagingTyp: "Bolts , Cut Pieces , Bundles",
    buyerLocation: "Stors , Textile Markets , Retailers",
    containe2:
      "Row cotton fabric is a versatile and breathable material, perfect for clothing and home decor.",
  },
];

function OurProduct() {
  const navigate = useNavigate();

  return (
    <Box pb={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        py={5}
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
          Our Product
        </Typography>
      </Box>
      <Container sx={{maxWidth:{lg:"xl",xs:"lg"}}}>
        <Grid
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
          {/* Product Item 1 */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              onClick={() => navigate("/onionpowder")}
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                marginBottom: { lg: "26px", md: "24px", xs: "5px" },
              }}
            >
              <CardMedia
                component="img"
                src={productimg1}
                alt="Image description"
                sx={{ objectFit: "cover", width: "537px", height: "310px",cursor:"pointer"}}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 0 0",
                  bgcolor: "transparent",
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  zIndex: 1,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "0 0 0",
                    color: "#DF3E26",
                    right: "-10px",
                  },
                }}
              >
                <EastIcon fontSize="large" />
              </Button>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: {
                  xs: "30px",
                  md: "26px",
                },
                fontWeight: "600",
              }}
            >
              Onion Powder
            </Typography>
            <Typography
              sx={{
                borderBottom: "3px solid black",
                width: "16%",
                marginBottom: "50px",
              }}
            >
              {" "}
            </Typography>
          </Grid>

          {/* Product Item 2 */}
          
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              onClick={() => navigate("/garlicpowder")}
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                cursor:"pointer",
                marginBottom: { lg: "26px", md: "24px", xs: "5px" },
              }}
            >
              <CardMedia
                component="img"
                // height="380"
                src={productimg2}
                alt="Image description"
                sx={{ objectFit: "cover", width: "537px", height: "310px",cursor:"pointer" }}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 0 0",
                  bgcolor: "transparent",
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  zIndex: 1,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "0 0 0",
                    color: "#DF3E26",
                    right: "-10px",
                  },
                }}
              >
                <EastIcon fontSize="large" />
              </Button>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: {
                  xs: "30px",
                  md: "26px",
                },
                fontWeight: "600",
              }}
            >
              Garlic Powder
            </Typography>
            <Typography
              sx={{
                borderBottom: "3px solid black",
                width: "16%",
                marginBottom: "50px",
              }}
            >
              {" "}
            </Typography>
          </Grid>

          {/* Product Item 3 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            onClick={() => navigate(`/item/${product[0].id}`)}
          >
            <Box
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                marginBottom: { lg: "26px", md: "24px", xs: "5px" },
              }}
            >
              <CardMedia
                component="img"
                // height="380"
                src={productimg3}
                alt="Image description"
                sx={{ objectFit: "cover", width: "537px", height: "310px",cursor:"pointer" }}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 0 0",
                  bgcolor: "transparent",
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  zIndex: 1,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "0 0 0",
                    color: "#DF3E26",
                    right: "-10px",
                  },
                }}
              >
                <EastIcon fontSize="large" />
              </Button>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: {
                  xs: "30px",
                  md: "26px",
                },
                fontWeight: "600",
              }}
            >
              Aluminium Foil
            </Typography>
            <Typography
              sx={{
                borderBottom: "3px solid black",
                width: "16%",
                marginBottom: "50px",
              }}
            >
              {" "}
            </Typography>
          </Grid>

          {/* Product Item 4 */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              onClick={() => navigate("/disposableitem")}
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                marginBottom: { lg: "26px", md: "24px", xs: "5px" },
              }}
            >
              <CardMedia
                component="img"
                // height="380"
                src={productimg4}
                alt="Image description"
                sx={{ objectFit: "cover", width: "537px", height: "310px",cursor:"pointer" }}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 0 0",
                  bgcolor: "transparent",
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  zIndex: 1,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "0 0 0",
                    color: "#DF3E26",
                    right: "-10px",
                  },
                }}
              >
                <EastIcon fontSize="large" />
              </Button>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: {
                  xs: "30px",
                  md: "26px",
                },
                fontWeight: "600",
              }}
            >
              Disposable Item
            </Typography>
            <Typography
              sx={{
                borderBottom: "3px solid black",
                width: "16%",
                marginBottom: "50px",
              }}
            ></Typography>
          </Grid>

          {/* Product Item 5 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            onClick={() => navigate(`/item/${product[1].id}`)}
          >
            <Box
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                marginBottom: { lg: "26px", md: "24px", xs: "5px" },
              }}
            >
              <CardMedia
                component="img"
                // height="380"
                src={productimg5}
                alt="Image description"
                sx={{ objectFit: "cover", width: "537px", height: "310px",cursor:"pointer" }}
              />
              <Button
                variant="contained"
                sx={{
                  boxShadow: "0 0 0",
                  bgcolor: "transparent",
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  zIndex: 1,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "0 0 0",
                    color: "#DF3E26",
                    right: "-10px",
                  },
                }}
              >
                <EastIcon fontSize="large" />
              </Button>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: {
                  xs: "30px",
                  md: "26px",
                },
                fontWeight: "600",
              }}
            >
              Row Cotton Fabric
            </Typography>
            <Typography
              sx={{
                borderBottom: "3px solid black",
                width: "16%",
                marginBottom: "50px",
              }}
            >
              {" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurProduct;

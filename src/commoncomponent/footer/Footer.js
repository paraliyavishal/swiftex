import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TableCell,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/home/swift ex logo -1 2.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import axios from "axios";

function Footer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState({
    email: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://swiftx.onrender.com/api/newsletter/${id}`)
        .then((res) => {
          setUserData({
            email: res.data.email,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function handleSubmit() {
    axios
      .post("https://swiftx.onrender.com/api/newsletter", userData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box>
      <Container sx={{ maxWidth: { lg: "xl", xs: "lg" } }}>
        <Box py={5}>
          <Box maxWidth={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              sx={{
                width: { lg: "80%", md: "80%", sm: "80%", xs: "100%" },
                backgroundColor: "#21324D",
                padding: { lg: "40px", md: "35px", sm: "30px", xs: "20px" },
                textAlign: "center",
                borderRadius: "30px",
              }}
            >
              <Typography
                py={1}
                sx={{
                  fontSize: { lg: "36px", md: "30px", sm: "24px", xs: "18px" },
                  color: "white",
                  lineHeight: {
                    lg: "45px",
                    md: "40px",
                    sm: "35px",
                    xs: "30px",
                  },
                }}
              >
                Newsletter
              </Typography>
              <Typography
                paddingBottom={3}
                sx={{
                  fontSize: { lg: "14px", md: "14px", sm: "12px", xs: "12px" },
                  color: "white",
                  fontFamily: "'Gothic A1', sans-serif",
                }}
              >
                Subscribe us & get update to your inbox
              </Typography>
              <TextField
                id="outlined-email-input"
                placeholder="Email"
                variant="outlined"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                sx={{
                  fontFamily: "'Gothic A1', sans-serif",
                  color: "white",
                  width: { lg: "50%", md: "60%", sm: "75%", xs: "100%" },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    borderRadius: "50px",
                    paddingRight: { lg: "0px" },
                    overflow: "hidden",
                    "& input": {
                      color: "white",
                      "&::placeholder": {
                        color: "white",
                        opacity: 1,
                        fontFamily: "'Gothic A1', sans-serif",
                      },
                    },
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "50px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{
                          backgroundColor: "#E13E26",
                          padding: {
                            lg: "15px 25px",
                            md: "13px 23px",
                            sm: "12px 20px",
                            xs: "10px 18px",
                          },
                          borderRadius: "50px",
                          color: "white",
                          fontFamily: "'Gothic A1', sans-serif",
                          fontSize: {
                            lg: "14px",
                            md: "13px",
                            sm: "12px",
                            xs: "11px",
                          },
                        }}
                        onClick={handleSubmit}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Box sx={{ pt: { md: 10, xs: 0 } }}>
            <Grid
              container
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              py={5}
              sx={{ borderBottom: "1px solid black" }}
            >
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  paddingTop: { md: 0, xs: 5 },
                }}
              >
                <Box>
                  <img src={logo} alt="" style={{ width: "70%" }} />
                  <Typography
                    onClick={() => navigate("/privacypolicy")}
                    mt={5}
                    sx={{
                      color: "#0000007a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: {
                        lg: "20px",
                        md: "18px",
                        sm: "16px",
                        xs: "14px",
                      },
                      cursor: "pointer",
                    }}
                  >
                    Privcay Policy
                  </Typography>
                  <Box
                    mt={1}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    justifyContent={{ xs: "center", sm: "center" }}
                    flexWrap="wrap"
                  >
                    <Typography
                      sx={{
                        color: "#0000007a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: {
                          md: "20px",
                          sm: "16px",
                          xs: "14px",
                        },
                      }}
                    >
                      © 2024 swiftex. All rights reserved
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  paddingTop: { md: 0, xs: 5 },
                }}
              >
                <Box
                  sx={{
                    display: { md: "block", xs: "flex" },
                    justifyContent: { sm: "start", xs: "center" },
                    gap: { md: 0, sm: 5, xs: 1.5 },
                  }}
                >
                  <TableHead
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "600",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "20px", md: "20px" },
                    }}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </TableHead>
                  <TableHead
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "600",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "20px", md: "20px" },
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate("/aboutus")}
                  >
                    About Us
                  </TableHead>
                  <TableHead
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "600",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "20px", md: "20px" },
                    }}
                    onClick={() => navigate("/blog")}
                  >
                    Blogs
                  </TableHead>
                  <TableHead
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "600",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "20px", md: "20px" },
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Conatct
                  </TableHead>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  paddingTop: { md: 0, xs: 5 },
                }}
              >
                <Box>
                  <Typography
                    mb={1}
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "700",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "22px", md: "20px" },
                    }}
                    onClick={() => navigate("/")}
                  >
                    Services
                  </Typography>
                  <Box>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/services")}
                    >
                      Road Fright Shipping
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/services")}
                    >
                      Air Fright Shipping
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/services")}
                    >
                      OceanFright Shipping
                    </TableCell>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  paddingTop: { md: 0, xs: 5 },
                }}
              >
                <Box>
                  <Typography
                    mb={1}
                    sx={{
                      "&:hover": { color: "#DF3E26", transition: ".3s" },
                      cursor: "pointer",
                      fontWeight: "700",
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: { xs: "22px", md: "20px" },
                    }}
                    onClick={() => navigate("/products")}
                  >
                    Product
                  </Typography>
                  <Box>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/onionpowder")}
                    >
                      Onion Powder
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/garlicpowder")}
                    >
                      Garlic Powder
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/products")}
                    >
                      Aluminium Foil
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/disposableitem")}
                    >
                      Disposable Item
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "16px", md: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/products")}
                    >
                      Row Cotton Fabric
                    </TableCell>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  paddingTop: { md: 0, xs: 5 },
                }}
              >
                <Box>
                  <Box ml={1}>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "14px", sm: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate("/contact")}
                    >
                      <LocationOnOutlinedIcon
                        style={{
                          fontSize: { sm: "30px", xs: "20px" },
                          marginRight: "10px",
                        }}
                      />
                      203, City Center, Savlia Cir, Sanman Society, Mansarovar
                      Society, Yoginagar Society, Surat, Gujarat 395006
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#0000007a",
                        "&:hover": { color: "#DF3E26", transition: ".3s" },
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: { xs: "14px", sm: "16px" },
                        borderBottom: "none",
                        display: "flex",
                        alignItems: "center",
                        padding: "5px 5px",
                        pt: { md: 0, xs: 3 },
                      }}
                      onClick={() => navigate("/contact")}
                    >
                      <PhoneOutlinedIcon
                        style={{
                          fontSize: { sm: "30px", xs: "20px" },
                          marginRight: "10px",
                        }}
                      />
                      +91 63527 79246
                    </TableCell>
                    <Box
                      mt={2.5}
                      sx={{ display: { md: "flex", xs: "none" } }}
                      gap={2}
                      alignItems={"center"}
                      flexWrap="wrap"
                      pl={5}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#21324D",
                          padding: "2px 2px",
                          borderRadius: "5px",
                          display: "flex",
                        }}
                      >
                        <Link
                          class="fa-brands fa-twitter"
                          style={{
                            color: "white",
                            fontSize: "1.9rem",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          to={"https://x.com/i/flow/login"}
                        >
                          {""}
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#21324D",
                          padding: "2px 2px",
                          borderRadius: "5px",
                          display: "flex",
                        }}
                      >
                        <Link
                          class="fa-brands fa-instagram"
                          style={{
                            color: "white",
                            fontSize: "1.9rem",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          to={"https://www.instagram.com/accounts/login/?hl=en"}
                        >
                          {""}
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#21324D",
                          padding: "2px 3px",
                          borderRadius: "5px",
                          display: "flex",
                        }}
                      >
                        <Link
                          class="fa-brands fa-linkedin-in"
                          style={{
                            color: "white",
                            fontSize: "1.9rem",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          to={"https://www.linkedin.com/feed/"}
                        >
                          {""}
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#21324D",
                          padding: "2px 7px",
                          borderRadius: "5px",
                          display: "flex",
                          
                        }}
                      >
                        <Link
                          class="fa-brands fa-facebook-f"
                          style={{
                            color: "white",
                            fontSize: "1.9rem",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          to={"https://www.facebook.com/login.php/"}
                        >
                          {""}
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              mt={4}
              sx={{ display: { md: "none", xs: "flex" } }}
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
              flexWrap="wrap"
            >
              <Box
                sx={{
                  backgroundColor: "#21324D",
                  padding: "2px 2px",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <Link
                  class="fa-brands fa-twitter"
                  style={{
                    color: "white",
                    fontSize: "1.9rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to={"https://x.com/i/flow/login"}
                >
                  {""}
                </Link>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#21324D",
                  padding: "2px 2px",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <Link
                  class="fa-brands fa-instagram"
                  style={{
                    color: "white",
                    fontSize: "1.9rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to={"https://www.instagram.com/accounts/login/?hl=en"}
                >
                  {""}
                </Link>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#21324D",
                  padding: "2px 3px",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <Link
                  class="fa-brands fa-linkedin-in"
                  style={{
                    color: "white",
                    fontSize: "1.9rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to={"https://www.linkedin.com/feed/"}
                >
                  {""}
                </Link>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#21324D",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <Link
                  class="fa-brands fa-facebook-f"
                  style={{
                    color: "white",
                    fontSize: "1.9rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to={"https://www.facebook.com/login.php/"}
                >
                  {""}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

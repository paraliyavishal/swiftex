import { Box, Button, Container, Grid, Typography } from "@mui/material";
import homebg from "../../assets/images/home/image.webp";
import homebg2 from "../../assets/images/home/Rectangle12.webp";
import jcb from "../../assets/images/home/image9.webp";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

function Herosection() {
  const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      "#car3",
      {
        xPercent: -200,
        yPercent: 0,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        duration: 3,
        delay: 3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${homebg})`,
          height: "1000px",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${homebg2})`,
            height: "90.35%",
            width: "100%",
            objectFit: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container sx={{ maxWidth: { md: "xl", xs: "sm" } }}>
            <Grid
              item
              container
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { lg: "56px", md: "50px", xs: "20px" },
                        fontWeight: "600",
                        color: "white",
                        fontFamily: "'Public Sans',sans-serif",
                        textAlign: { lg: "start", md: "start", xs: "center" },
                      }}
                    >
                      Connecting Global Markets with Reliable Import-Export
                      Solutions.
                    </Typography>
                  </Box>
                  <Box sx={{ color: "#B2BCBF", mt: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        fontFamily: "'Prompt',sans-serif",
                        textAlign: { lg: "start", md: "start", xs: "center" },
                      }}
                    >
                      Explore dependable import-export solutions that bridge
                      global markets. We deliver efficient and robust services
                      to optimize international trade, ensuring seamless
                      transactions for enterprises across the world
                    </Typography>
                  </Box>
                  <Box
                    py={4}
                    sx={{
                      textAlign: { lg: "start", md: "start", xs: "center" },
                    }}
                  >
                    <Button
                      onClick={() => navigate("/contact")}
                      sx={{
                        padding: "8px 18px",
                        border: "1px solid white",
                        borderRadius: "50px",
                        color: "white",
                        fontFamily: "'Public Sans',sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Enquiry Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box sx={{ display: "flex", alignItems: "center" }} id="car3">
                  <img
                    src={jcb}
                    alt="m3"
                    style={{ width: "100%", maxWidth: "700px" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Herosection;

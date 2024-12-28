import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Herosection from "../../../components/blog/Herosection";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Footer from "../../../commoncomponent/footer/Footer";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import { blogData } from "../Blogs";
import { useParams } from "react-router-dom";

function BlogsAbout() {
  const { id } = useParams();
  console.log(id);

  const Blog = blogData.find((item) => item.id == id);

  return (
    <Box>
      <Header />
      <Navbar />
      <Herosection />
      <Box pb={10}>
        <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
          <Box sx={{ justifyContent: "center", textAlign: "center", mb: 10 }}>
            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: "600",
                mt: 10,
                fontFamily: "'Public Sans',sans-serif",
              }}
            >
              Blogs
            </Typography>
          </Box>
          <Grid container xs={12} item spacing={5} sx={{display:"flex", justifyContent:"center"}}>
            <Grid item xs={12} md={10} >
            
              <img
                src={Blog?.imgSrc}
                style={{ width: "100%", height:{lg:"800px",xs:"200px"}, borderRadius:"20px" }}
                alt=""
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "50px",
                      md: "42px",
                      sm: "30px",
                      xs: "24px",
                    },
                    fontWeight: "600",
                    py: 5,
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.title}
                </Typography>
              </Box>

              <Box>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p1}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p2}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {Blog?.p3}
                </Typography>
                <Box
                  py={2}
                  sx={{
                    marginLeft: {
                      lg: "49px",
                      md: "18px",
                      sm: "18px",
                      xs: "8px",
                    },
                  }}
                >
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                        sm: "18px",
                        xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step1}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                     sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step2}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                        sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step3}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                       sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step4}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                        sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step5}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                        sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step6}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                        sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step7}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                       sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step8}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                       sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step9}
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      color: "#00000099",
                      fontSize: {
                    sm: "18px",
                      xs: "16px",
                      },
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {Blog?.step10}
                  </Typography>
                </Box>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {Blog?.p4}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> 
                  {Blog?.H1}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                    sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p5}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p6}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p7}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p8}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {Blog?.H2}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p9}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p10}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p11}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} />{" "}
                  {Blog?.H3}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                {Blog?.p12}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                {Blog?.p13}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> 
                  {Blog?.H4}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                    sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p14}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
              {Blog?.p15}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                   sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                 {Blog?.p16}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                 {Blog?.p17}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p18}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {Blog?.H5}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                 {Blog?.p19}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p20}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p21}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> 
                  {Blog?.H6}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p22}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p23}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p24}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} />{" "}
                  {Blog?.H7}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                  sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                 {Blog?.p25}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                    sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                 {Blog?.p26} 
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p27}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p28}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {Blog?.H8}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                    sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p29}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p30}
                </Typography>
                <Typography
                  py={1}
                  sx={{
                    marginLeft: {
                      lg: "48px",
                      md: "18px",
                      sm: "0px",
                      xs: "0px",
                    },
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "22px",
                    fontFamily: "'Public Sans',sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {Blog?.H9}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                  sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p31}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                 sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  {Blog?.p32}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                      sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                {Blog?.p33}
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                     sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                  }}
                >
                  <a href="">https://swiftex.com/blog/</a>
                </Typography>
                <Typography
                  py={2}
                  sx={{
                    color: "#000000B2",
                    fontSize: {
                    sm: "18px",
                      xs: "16px",
                    },
                    fontFamily: "'Public Sans',sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Visit our page and let us know how do like us!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default BlogsAbout;

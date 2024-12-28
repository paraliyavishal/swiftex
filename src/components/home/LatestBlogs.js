import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Latest1 from "../../assets/images/home/Latest1.webp";
import Latest2 from "../../assets/images/home/Latest2.webp";
import Latest3 from "../../assets/images/home/Latest3.webp";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

// Blog data array
const latestBlogData = [
  {
    id: 1,
    image: Latest1,
    title: "Road Freight Solutions for Global Export",
    description:
      "Streamline your supply chain with our reliable and flexible road freight shipping solutions, ensuring timely door-to-door delivery at competitive rates.",
    link: "/blog",
  },
  {
    id: 2,
    image: Latest2,
    title: "Air Freight Solutions for Worldwide Shipping",
    description:
      "Goods are monitored closely from the point of origin to their final destination, reducing the risk of theft or damage.",
    link: "/blog",
  },
  {
    id: 3,
    image: Latest3,
    title: "Expert Freight Shipping for Global Trade",
    description:
      "Freight shipping is an essential component of global trade, enabling businesses to move products across borders and continents.",
    link: "/blog",
  },
];

function LatestBlogs() {
  const navigate = useNavigate();

  return (
    <Box py={4}>
      <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
        <Box>
          <Typography
            variant="h3"
            py={5}
            pb={6}
            sx={{
              fontSize: {
                xs: "38px",
                md: "40px",
                lg: "48px",
                xl: "56px",
              },
              textAlign: "center",
              fontWeight: "600",
              color: "black",
              fontFamily: "'Public Sans',sans-serif",
            }}
          >
            Latest Blogs
          </Typography>
          <Grid
            item
            container
            xs={12}
            spacing={4}
            display={"flex"}
            justifyContent={"start"}
          >
            {latestBlogData.map((blog) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <Box
                  onClick={() => navigate(blog.link)}
                  sx={{
                    boxShadow: "5px 5px 10px #d1d1d1",
                    padding: "15px",
                    borderRadius: "30px",
                  }}
                >
                  <img src={blog.image} alt={blog.title} width={"100%"} />
                  <Typography
                    variant="h5"
                    py={1}
                    sx={{
                      fontSize: {
                        xs: "1.5rem",
                        sm: "1.50rem",
                      },
                      fontWeight: "600",
                      color: "black",
                      fontFamily: "'Public Sans',sans-serif",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    sx={{
                      borderBottom: "3px solid black",
                      width: "16%",
                      marginBottom: "15px",
                    }}
                  >
                  </Typography>
                  <Box sx={{}}>
                    <Typography
                      py={1}
                      sx={{
                        fontFamily: "'Prompt',sans-serif",
                        color: "#00000080",
                      }}
                    >
                      {blog.description}
                    </Typography>
                    <Typography
                      py={1}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#00000080",
                        fontFamily: "'Public Sans',sans-serif",
                      }}
                    >
                      Read More <EastIcon sx={{ color: "#808080", mr: 5, fontSize:"16px" }} />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default LatestBlogs;

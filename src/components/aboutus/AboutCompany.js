import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Company from '../../assets/images/aboutus/companyanimation.json';
import Lottie from 'lottie-react';

function AboutCompany() {
    return (
        <Box sx={{ marginBottom: "100px",paddingTop:"50px"}}>
            <Container  sx={{maxWidth:{lg:"xl", sm:"lg"}}}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                        <Lottie animationData={Company} style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography variant='h1' sx={{fontSize:{lg:"56px",sm:"46px",xs:"36px"}, fontWeight: "600", marginBottom: "40px" , display:'flex', justifyContent:{md:"start", xs:"center"}}}>
                            About Company
                        </Typography>
                        <Typography sx={{ fontSize:{lg:"18px",sm:"20px",xs:"18px"}, fontFamily: "'Prompt', sans-serif", marginBottom: "36px" }}>
                          <span style={{color:"#DF3E26"}}>“Swiftex Overseas ”</span>is a leading import-export company based in India, specializing in the global trade of agriculture products and a variety of other exportable goods. With years of experience in the export industry, we ensure seamless and reliable international trade solutions, catering to markets across Asia, Europe, North America, and the Middle East.
                        </Typography>
                        <Typography sx={{fontSize:{lg:"18px",sm:"20px",xs:"18px"}, fontFamily: "'Prompt', sans-serif",marginBottom: "20px" }}>
                        Our mission is to be a trusted partner in global trade, offering end-to-end solutions for importers and exporters worldwide. We uphold values of integrity, sustainability, and a customer-centric approach, ensuring every transaction is transparent and efficient.
                        </Typography>
                        <Typography sx={{fontSize:{lg:"18px",sm:"20px",xs:"18px"},fontFamily: "'Prompt', sans-serif",}}>
                        At Swiftex Overseas, we believe in building long-term relationships based on trust, transparency, and sustainability. Whether you're looking for agricultural exports from India or need a reliable partner for international trade, Swiftex Overseas is here to meet your import-export needs with excellence.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutCompany;
